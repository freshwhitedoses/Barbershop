package olechochek.barbershop.Controllers;

import olechochek.barbershop.Config.JWTGenerator;
import olechochek.barbershop.Entity.AuthResponseDTO;
import olechochek.barbershop.Entity.User;
import olechochek.barbershop.Entity.UserDto;
import olechochek.barbershop.Entity.UserMapper;
import olechochek.barbershop.Services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


/*
class TestEntity(
        val huy: String,
        val zalupa: String,
)

@RestController
class TestController {
    @GetMapping("/test")
    fun test() = ResponseEntity.internalServerError().body( TestEntity(huy = "Zalupe", zalupa = "Huy"))
}
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JWTGenerator jwtGenerator;

    public UserController(UserService userService, AuthenticationManager authenticationManager, JWTGenerator jwtGenerator) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("/registration")
    public ResponseEntity<String> addUser(@RequestBody User newUser){
        if(!userService.addUser(newUser)) return ResponseEntity.badRequest().body("User with this phone exist yet");
        else return ResponseEntity.ok("ok");
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestParam String phone, @RequestParam String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(phone,password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }
    @PreAuthorize("isAuthenticated()")
    @GetMapping("/account")
    public ResponseEntity<UserDto> getCurrentAccount(){
        return ResponseEntity.ok(UserMapper.userToDto((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
    }

}
