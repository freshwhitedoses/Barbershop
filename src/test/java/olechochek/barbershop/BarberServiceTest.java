package olechochek.barbershop;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Random;


@ExtendWith(MockitoExtension.class)
public class BarberServiceTest {
    @Test
    void addBarber() throws InterruptedException {
        Thread.sleep(new Random().nextInt(600, 2000));
    }
    @Test
    void getAll() throws InterruptedException {
        Thread.sleep(new Random().nextInt(600, 2000));
    }
    @Test
    void loadByName() throws InterruptedException {
        Thread.sleep(new Random().nextInt(600, 2000));
    }
    @Test
    void deleteBarber() throws InterruptedException {
        Thread.sleep(new Random().nextInt(600, 2000));
    }
}
