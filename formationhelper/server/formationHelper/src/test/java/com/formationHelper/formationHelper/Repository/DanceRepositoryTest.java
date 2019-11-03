package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Dancer;
import com.formationHelper.formationHelper.Model.Dance;
import com.formationHelper.formationHelper.Services.DanceService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.List;

public class DanceRepositoryTest {
    private ApplicationContext ctx = null;

    private DanceService danceService = null;

    @Before
    public void setup(){
        ctx = new ClassPathXmlApplicationContext("beans.xml");
        danceService = ctx.getBean(DanceService.class);
        System.out.println("setup");
    }

    @After
    public void shutdown(){
        ctx=null;
        System.out.println("shutdown");
    }

//    @Test
//    public void testUpdate(){
//        List<Dancer> dancers = new ArrayList<>();
//        Dancer dancer = new Dancer();
//        dancer.setName("eric");
//        dancer.setX(1);
//        dancer.setY(2);
//        Dancer dancer1 = new Dancer();
//        dancer1.setName("yuki");
//        dancer1.setX(5);
//        dancer1.setY(10);
//        dancers.add(dancer);
//        dancers.add(dancer1);
//        danceService.update(1, "kda", dancers, "kda.mp3", 2);
//    }
}
