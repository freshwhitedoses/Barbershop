package olechochek.barbershop.Entity;

import lombok.Getter;
import lombok.Setter;
import olechochek.barbershop.Entity.Enums.Experience;

import javax.persistence.*;

@Entity
@Table(name = "barber")
@Getter
@Setter
public class Barber{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "experience")
    @Enumerated(EnumType.STRING)
    private Experience experience;
    @Column(name = "description")
    private String description;
    @Column(name="photo")
    private String photo;

    public Barber(String name, String surname,
                  Experience experience, String description, String photo) {
        this.name = name;
        this.surname = surname;
        this.experience = experience;
        this.description = description;
        this.photo = photo;
    }

    public Barber() {
    }
}

