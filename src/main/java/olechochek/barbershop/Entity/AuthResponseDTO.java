package olechochek.barbershop.Entity;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String accessToken;

    public AuthResponseDTO(String accessToken) {
        this.accessToken = "Bearer "+ accessToken;
    }
}
