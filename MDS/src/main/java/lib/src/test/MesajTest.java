package test;

import dto.Mesaj;
import org.junit.Assert;
import org.junit.Test;

import java.time.Instant;

import static junit.framework.TestCase.assertEquals;

public class MesajTest {

    @Test
    public void testMesajClassHappyFlow(){
        Mesaj M = new Mesaj();
        M = Mesaj.of("Andrei", "Salut");

        Mesaj M2 = new Mesaj();
        M2.setExpeditor("Andrei");
        assertEquals(M2.getExpeditor(), M.getExpeditor());
        Assert.assertNotEquals(M2.getContinut(), M.getContinut());
    }

    @Test
    public void testMesajClassUnhappyFlow(){
        Mesaj M = new Mesaj();
        M = Mesaj.of("Andrei", "Salut");

        Mesaj M2 = new Mesaj();
        M2.setExpeditor("Andrei");
        Assert.assertNotEquals(M2.getContinut(), M.getContinut());
    }

    @Test
    public void testMesajClassTimestamp(){
        Mesaj M = new Mesaj();
        M = Mesaj.of("Andrei", "Salut");

        Instant tmnow = Instant.now();
        M.setTimestamp(tmnow);
        assertEquals(M.getTimestamp(), tmnow);
    }

    @Test
    public void testMesajClassGetters(){
        Mesaj M = new Mesaj();
        M = Mesaj.of("Andrei", "Salut");
        assertEquals(M.getContinut(), "Salut");
        assertEquals(M.getExpeditor(), "Andrei");
    }


}
