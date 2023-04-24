package olechochek.barbershop.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import olechochek.barbershop.Entity.Enums.Experience;
import olechochek.barbershop.Entity.Enums.Type;

@Entity
@Table(name = "office")
@Getter
@Setter
public class Office {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "price")
    private String price;
    @Column(name = "description")
    private String description;
    @Column(name = "experience")
    private Experience experience;
    @Column(name = "type")
    private Type type;

    public Office(String price, String description,
                  Experience experience, Type type) {
        this.price = price;
        this.description = description;
        this.experience = experience;
        this.type = type;
    }

    public Office() {
    }
}
