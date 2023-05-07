package olechochek.barbershop.Controllers;

import olechochek.barbershop.Entity.Entry;
import olechochek.barbershop.Entity.User;
import olechochek.barbershop.Services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EntryController {
    @Autowired
    private EntryService entryService;
    @PostMapping("/add/entry")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Object> addEntry(@RequestBody Entry entry){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        entryService.addEntry(entry, user);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/entries")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<Entry>> getEntries(){
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Entry> entries = entryService.getAll(user);
        return ResponseEntity.ok().body(entries);
    }
}
