package olechochek.barbershop.Controllers;

import olechochek.barbershop.Entity.Barber;
import olechochek.barbershop.Services.BarberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@ResponseBody
public class BarberController {
    @Autowired
    private  BarberService barberService;


    @PostMapping("/add/barber")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity.BodyBuilder addBarber(Barber barber){
        barberService.addBarber(barber);
        return ResponseEntity.ok();
    }
    @GetMapping("/barbers")
    public ResponseEntity<List<Barber>> getBarbers(){
        List<Barber> barbers = barberService.getAll();
        return ResponseEntity.ok().body(barbers);
    }
}
