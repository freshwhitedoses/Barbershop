package olechochek.barbershop.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import olechochek.barbershop.Entity.Enums.Role;

@Getter
@AllArgsConstructor
public class UserDto {
    private Integer id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Role role;
}

