package com.formationHelper.formationHelper.Services;

import com.formationHelper.formationHelper.Model.Dance;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DanceServiceTest {
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

    @Test
    public void testSave(){
        Dance dance = new Dance();
        dance.setDance_name("test dance 1");
        dance.setNumDancers(4);
        danceService.save(dance);
    }
}
