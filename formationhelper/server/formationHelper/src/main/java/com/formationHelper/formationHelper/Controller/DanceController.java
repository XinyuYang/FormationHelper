//package com.formationHelper.formationHelper.Controller;
//
//import com.formationHelper.formationHelper.Model.Dance;
//import com.formationHelper.formationHelper.Services.DanceService;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.server.ResponseStatusException;
//
//import static org.springframework.web.bind.annotation.RequestMethod.*;
//
//@RestController
//public class DanceController {
//    private final DanceService danceService;
//
//    public DanceController(DanceService danceService){
//        this.danceService = danceService;
//    }
//
//
//    // TODO: add one more request param: music!!
//    @RequestMapping(value = "/createDance", method = POST)
//    public String createDance(@RequestParam(name = "name", defaultValue = "") String name, @RequestParam(name = "num_dancer", defaultValue = "1") String numDancers){
//        Dance dance = new Dance();
//        dance.setDance_name(name);
//        dance.setNumDancers(Integer.valueOf(numDancers));
//        if(danceService.saveDance(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to add dance");
//        }
//        System.out.println(dance.getDance_name());
//        return "success";
//    }
//
//
//    @RequestMapping(value = "/getDance", method = GET)
//    public String getDance(@RequestBody Dance dance){
//        if(!danceService.isValid(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(danceService.saveDance(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//
//    @RequestMapping(value = "/saveDance", method = PUT)
//    public String saveDance(@RequestBody Dance dance){
//        if(danceService.saveDance(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//
//    @RequestMapping(value = "/getAllDance", method = GET)
//    public String getAllDance(@RequestBody Dance dance){
//        if(!danceService.isValid(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(danceService.saveDance(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//    @RequestMapping(value = "/deleteDance", method = DELETE)
//    public String deleteDance(@RequestBody Dance dance){
//        if(!danceService.isValid(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(danceService.saveDance(dance)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//}
