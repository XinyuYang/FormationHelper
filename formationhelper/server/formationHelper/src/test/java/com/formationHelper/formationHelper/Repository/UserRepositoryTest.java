package com.formationHelper.formationHelper.Repository;

import org.junit.After;
import org.junit.Before;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserRepositoryTest {
    private ApplicationContext ctx = null;
    private DanceRepository danceRepository = null;

    @Before
    public void setup(){
        ctx = new ClassPathXmlApplicationContext("beans.xml");
        danceRepository = ctx.getBean(DanceRepository.class);
        System.out.println("setup");
    }

    @After
    public void shutdown(){
        ctx=null;
        System.out.println("shutdown");
    }

}
