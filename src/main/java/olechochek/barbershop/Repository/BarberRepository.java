package olechochek.barbershop.Repository;

import olechochek.barbershop.Entity.Barber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BarberRepository extends JpaRepository<Barber,Integer> {
    Optional<Barber> findBarberByName(String name);
}
