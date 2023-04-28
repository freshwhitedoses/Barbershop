package olechochek.barbershop.Services;

import lombok.extern.slf4j.Slf4j;
import olechochek.barbershop.Config.SecurityConfig;
import olechochek.barbershop.Entity.Barber;
import olechochek.barbershop.Entity.Enums.Role;
import olechochek.barbershop.Repository.BarberRepository;
import olechochek.barbershop.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Transactional
@Slf4j
@Service
public class BarberService {
    private final BarberRepository barberRepository;
    public BarberService(BarberRepository barberRepository) {
        this.barberRepository = barberRepository;
    }
    public boolean addBarber(Barber barber){
        if(barberRepository.findBarberByName(barber.getName()).isPresent()) return false;
        barberRepository.save(barber);
        return true;
    }
    public List<Barber> getAll(){
        return barberRepository.findAll();
    }
}
