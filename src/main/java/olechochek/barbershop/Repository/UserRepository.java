package olechochek.barbershop.Repository;

import olechochek.barbershop.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findUserByPhone(String phone);
    User getUserByPhone(String phone);
}
