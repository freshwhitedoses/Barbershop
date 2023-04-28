package olechochek.barbershop.Repository;

import olechochek.barbershop.Entity.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Integer> {
    List<Entry> getAllByPhone(String phone);
}
