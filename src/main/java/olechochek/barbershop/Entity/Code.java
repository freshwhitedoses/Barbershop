package olechochek.barbershop.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "code")
@Getter
@Setter
public class Code {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "code")
    private Long code;
    @Column(name = "phone")
    private String phone;

    public Code(Long code, String phone) {
        this.code = code;
        this.phone = phone;
    }

    public Code() {

    }
}
