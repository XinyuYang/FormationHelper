package com.formationHelper.formationHelper.Controller;//package com.formationHelper.formationHelper.Controller;

import com.formationHelper.formationHelper.Model.Dance;
import com.formationHelper.formationHelper.Repository.DanceRepository;
import com.formationHelper.formationHelper.Services.DanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
public class DanceController {
    @Autowired
    private DanceService danceService;
    @Autowired
    private DanceRepository danceRepository;

//    public DanceController(DanceService danceService, Dance){
//        this.danceService = danceService;
//    }


    @RequestMapping(value = "/createDance", method = POST)
    public void createDance(@RequestBody Dance dance){
        danceService.save(dance);
    }


    @RequestMapping(value = "/getDance", method = GET)
    public Dance getDance(@RequestParam(name = "name") String name){
        return danceRepository.findDanceByDance_name(name);
    }

    @RequestMapping(value = "/saveDance", method = PUT)
    public void saveDance(@RequestBody Dance dance){
        danceService.update(dance);
    }

    @RequestMapping(value = "/getAllDance", method = GET)
    public List<Dance> getAllDance(){
        return danceRepository.findAll();
    }

    @RequestMapping(value = "/deleteDance", method = DELETE)
    public void deleteDance(@RequestParam(name = "name") String name){
        if(danceRepository.findDanceByDance_name(name)!= null){
            danceRepository.deleteDanceByDance_name(name);
        }
    }
}
