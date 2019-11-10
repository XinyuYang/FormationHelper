package com.formationHelper.formationHelper.Controller;//package com.formationHelper.formationHelper.Controller;

import com.formationHelper.formationHelper.Model.Dancer;
import com.formationHelper.formationHelper.Repository.DancerRepository;
import com.formationHelper.formationHelper.Services.DancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import static org.springframework.web.bind.annotation.RequestMethod.*;

public class DancerController {
    @Autowired
    private DancerRepository dancerRepository;
    @Autowired
    private DancerService dancerService;

    @RequestMapping(value = "/addDancer", method = POST)
    public void addDancer(@RequestBody Dancer dancer){
        dancerRepository.save(dancer);
    }
    @RequestMapping(value = "/getDancer", method = GET)
    public Dancer getDancer(@RequestParam(name = "name") String name){
        return dancerRepository.findDancerByName(name);
    }

    @RequestMapping(value = "/deleteDancer", method = DELETE)
    public void deleteDancer(@RequestParam(name = "name") String name){
        if (dancerRepository.findDancerByName(name)!=null){
            dancerRepository.deleteDancerByName(name);
        }
    }




}
