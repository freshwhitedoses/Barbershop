package olechochek.barbershop.Services;

import lombok.extern.slf4j.Slf4j;
import olechochek.barbershop.Entity.Office;
import olechochek.barbershop.Repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Slf4j
@Service
public class OfficeService {
    @Autowired
    private  OfficeRepository officeRepository;

    public void addOffice(Office office){
        officeRepository.save(office);
    }
    public List<Office> getAll(){
        return officeRepository.findAll();
    }
}
