package olechochek.barbershop;

import olechochek.barbershop.Entity.Enums.Role;
import olechochek.barbershop.Entity.User;
import olechochek.barbershop.Repository.UserRepository;
import olechochek.barbershop.Services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Captor
    ArgumentCaptor<User> captor;
    @Mock
    private UserRepository userRepository;
    @Mock
    private BCryptPasswordEncoder encoder;
    @Test
    void addUser() {

        UserService service = new UserService(userRepository);
        User testUser = new User("olya", "evstartova","olya@mail.ru", "989999","test", Role.USER);
        service.addUser(testUser);
        Mockito.verify(userRepository).save(captor.capture());
        User captured = captor.getValue();
        Assertions.assertEquals("olya", captured.getName());
    }
    @Test
    void loadUserByUsername() {
        UserService service = new UserService(userRepository);
        User testUser = new User("hahah", "evstartova","olya@mail.ru", "989999","test", Role.USER);
        service.addUser(testUser);
        Mockito.verify(userRepository).save(captor.capture());
        User captured = captor.getValue();
        Assertions.assertEquals("hahah", captured.getName());
    }
}
