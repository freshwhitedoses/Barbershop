package olechochek.barbershop.Services;

import lombok.extern.slf4j.Slf4j;
import olechochek.barbershop.Config.SecurityConfig;
import olechochek.barbershop.Entity.Enums.Role;
import olechochek.barbershop.Entity.User;
import olechochek.barbershop.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Slf4j
@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {
        return userRepository.getUserByPhone(phone);
    }
    public boolean addUser(User user){
        if(userRepository.findUserByPhone(user.getPhone()).isPresent()){
            return false;
        }
        user.setPassword(SecurityConfig.encoder().encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
        return true;
    }
    public boolean isValidUser(String phone, String password) {
        Optional<User> user = userRepository.findUserByPhone(phone);
        if (user.isEmpty()) {
            return false;
        } else {
            return SecurityConfig.encoder().matches(password, user.get().getPassword());
        }
    }
}
