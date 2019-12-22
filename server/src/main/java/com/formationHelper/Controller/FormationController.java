package com.formationHelper.Controller;

import com.formationHelper.Exception.ResourceNotFoundException;
import com.formationHelper.Model.Formation;
import com.formationHelper.Repository.DanceRepository;
import com.formationHelper.Repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class FormationController {
    @Autowired
    private DanceRepository danceRepository;
    @Autowired
    private FormationRepository formationRepository;

    @GetMapping("/dance/{danceId}/getAllFormations")
    public @ResponseBody
    Page<Formation> getAllFormations(@PathVariable(value = "danceId") Integer danceId,
                                Pageable pageable){
        return formationRepository.findByDanceId(danceId, pageable);
    }

    @PostMapping("/dance/{danceId}/createFormation")
    public @ResponseBody Formation addDance(@PathVariable(value = "danceId") Integer danceId,
                                        @RequestBody Formation formation){
        return danceRepository.findById(danceId).map(dance -> {
            formation.setDance(dance);
            return formationRepository.save(formation);
        }).orElseThrow(() -> new ResourceNotFoundException("DanceId "+danceId+" Not Found"));
    }

    @PutMapping("/dance/{danceId}/saveFormation/{formationId}")
    public @ResponseBody Formation saveFormation(@PathVariable (value="danceId") Integer danceId,
                                         @PathVariable (value="formationId") Integer formationId,
                                         @RequestBody Formation formationRequest){
        if(!danceRepository.existsById(danceId)){
            throw new ResourceNotFoundException("danceId "+danceId+" not found");
        }
        return formationRepository.findById(formationId).map(formation -> {
            formation.setDuration(formationRequest.getDuration());
            formation.setName(formationRequest.getName());
            formation.setNumDancers(formationRequest.getNumDancers());
            formation.setStartTime(formationRequest.getStartTime());
            formation.setEndTime(formationRequest.getEndTime());
            return formationRepository.save(formation);
        }).orElseThrow(() -> new ResourceNotFoundException("Formation Id "+formationId+" Not Found"));
    }
    @DeleteMapping("/dance/{danceId}/deleteFormation/{formationId}")
    public ResponseEntity<?> deleteFormation(@PathVariable (value = "danceId") Integer danceId,
                                         @PathVariable (value = "formationId") Integer formationId){
        return formationRepository.findByIdAndDanceId(formationId, danceId).map(formation ->{
            formationRepository.delete(formation);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Formation not found with id "+formationId+" and DanceId "+danceId));
    }
}
