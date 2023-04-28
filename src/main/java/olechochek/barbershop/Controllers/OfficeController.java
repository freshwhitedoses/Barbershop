package olechochek.barbershop.Controllers;

import olechochek.barbershop.Entity.Barber;
import olechochek.barbershop.Entity.Office;
import olechochek.barbershop.Services.BarberService;
import olechochek.barbershop.Services.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class OfficeController {
    @Autowired
    private OfficeService officeService;
    @PostMapping("/add/office")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity.BodyBuilder addBarber(Office office){
        officeService.addOffice(office);
        return ResponseEntity.ok();
    }
    @GetMapping("/offices")
    public ResponseEntity<List<Office>> getOffices(){
        List<Office> offices = officeService.getAll();
        return ResponseEntity.ok().body(offices);
    }
}
