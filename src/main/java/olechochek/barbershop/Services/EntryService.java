package olechochek.barbershop.Services;

import lombok.extern.slf4j.Slf4j;
import olechochek.barbershop.Entity.Entry;
import olechochek.barbershop.Entity.Office;
import olechochek.barbershop.Entity.User;
import olechochek.barbershop.Repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Slf4j
@Service
public class EntryService {
    @Autowired
    private EntryRepository entryRepository;
    public void addEntry(Entry entry, User user){
        entry.setPhone(user.getPhone());
        entryRepository.save(entry);
    }
    public List<Entry> getAll(User user){
        return entryRepository.getAllByPhone(user.getPhone());
    }
}
