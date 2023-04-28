package olechochek.barbershop.Entity;

public class UserMapper {
    public static UserDto userToDto(User user) {
        return new UserDto(
                user.getId(), user.getName(), user.getSurname(), user.getEmail(), user.getPhone(), user.getRole()
        );
    }
}
