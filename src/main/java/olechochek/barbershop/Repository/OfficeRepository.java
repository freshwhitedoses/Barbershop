package olechochek.barbershop.Repository;

import olechochek.barbershop.Entity.Enums.Type;
import olechochek.barbershop.Entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfficeRepository extends JpaRepository<Office, Integer> {
    Office getOfficeByType(Type type);
}
