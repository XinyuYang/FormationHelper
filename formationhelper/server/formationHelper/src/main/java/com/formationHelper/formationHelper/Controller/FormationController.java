//package com.formationHelper.formationHelper.Controller;
//
//import com.formationHelper.formationHelper.Model.Formation;
//import com.formationHelper.formationHelper.Services.SaveFormationService;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.server.ResponseStatusException;
//import static org.springframework.web.bind.annotation.RequestMethod.*;
//
//
//import static org.springframework.web.bind.annotation.RequestMethod.PUT;
//
//public class FormationController {
//    private final SaveFormationService saveFormation;
//
//    public FormationController(SaveFormationService saveFormation){
//        this.saveFormation = saveFormation;
//    }
//
//    @RequestMapping(value = "/createFormation", method = PUT)
//    public String createFormation(@RequestBody Formation formation){
//        if(!saveFormation.isValid(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(saveFormation.saveFormation(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//
//    @RequestMapping(value = "/getFormation", method = GET)
//    public String getFormation(@RequestBody Formation formation){
//        if(!saveFormation.isValid(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(saveFormation.saveFormation(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//
//    @RequestMapping(value = "/getAllFormation", method = GET)
//    public String getAllFormation(@RequestBody Formation formation){
//        if(!saveFormation.isValid(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(saveFormation.saveFormation(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//
//    @RequestMapping(value = "/saveFormation", method = PUT)
//    public String saveFormation(@RequestBody Formation formation){
//        if(!saveFormation.isValid(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(saveFormation.saveFormation(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//    @RequestMapping(value = "/deleteFormation", method = DELETE)
//    public String deleteFormation(@RequestBody Formation formation){
//        if(!saveFormation.isValid(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Missing necessary information to save dance");
//        }
//        if(saveFormation.saveFormation(formation)){
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Fail to save dance");
//        }
//        return "success";
//    }
//}
