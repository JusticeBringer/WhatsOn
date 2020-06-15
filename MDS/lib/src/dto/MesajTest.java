package dto;

import java.time.Instant;

import static org.junit.Assert.*;

public class MesajTest {
    public static void main(String[] args) {
        Mesaj M = new Mesaj();
        M = Mesaj.of("Andrei", "Salut");
        assertEquals(M.getContinut(), "Salut");
        assertEquals(M.getExpeditor(), "Andrei");

        Instant tmnow = Instant.now();
        M.setTimestamp(tmnow);


        assertEquals(M.getTimestamp(), tmnow);

        Mesaj M2 = new Mesaj();
        M2.setExpeditor("Andrei");
        assertEquals(M2.getExpeditor(), M.getExpeditor());
        assertNotEquals(M2.getContinut(), M.getContinut());

    }

}
