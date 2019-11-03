//package com.formationHelper.formationHelper.Services;
//
//import com.formationHelper.formationHelper.Repository.FormationRepository;
//import com.formationHelper.formationHelper.Model.Formation;
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class SaveFormationService {
//    private final FormationRepository formationRepository;
//
//    public SaveFormationService(FormationRepository formationRepository){
//        this.formationRepository = formationRepository;
//    }
//
//    public boolean isValid(Formation formation){
//        return true;
//    }
//
//    public boolean saveFormation(Formation formation){
//        try{
//            formationRepository.save(formation);
//        } catch (Exception e){
//            e.printStackTrace();
//            return false;
//        }
//        return true;
//    }
//
//
//}
