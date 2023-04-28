package olechochek.barbershop.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "entry")
@Getter
@Setter
public class Entry {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "office")
    private String office;
    @Column(name = "barber")
    private String barber;
    @Column(name = "price")
    private String price;
    @Column(name = "date")
    private Date date;
    @Column(name = "phone")
    private String phone;

    public Entry(String office, String barber, String price, Date date, String phone) {
        this.office = office;
        this.barber = barber;
        this.price = price;
        this.date = date;
        this.phone=phone;
    }

    public Entry() {
    }
}
