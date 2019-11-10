package com.formationHelper.formationHelper.Controller;//package com.formationHelper.formationHelper.Controller;

import com.formationHelper.formationHelper.Model.Formation;
import com.formationHelper.formationHelper.Repository.DanceRepository;
import com.formationHelper.formationHelper.Repository.DancerRepository;
import com.formationHelper.formationHelper.Repository.FormationRepository;
import com.formationHelper.formationHelper.Services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

import static org.springframework.web.bind.annotation.RequestMethod.*;


import static org.springframework.web.bind.annotation.RequestMethod.PUT;

public class FormationController {
    @Autowired
    private FormationService formationService;
    @Autowired
    private FormationRepository formationRepository;
    @Autowired
    private DanceRepository danceRepository;

    @GetMapping("/dance/{danceId}/formation")
    public Page<Formation> getAllFormationsByDanceID(@PathVariable (value = "danceId") Integer danceId, Pageable pageable){
        return formationRepository.findByDance_Id(danceId, pageable);
    }


    @PutMapping("/dance/{danceId}/formation")
    public void createFormation(@PathVariable (value = "danceId") Integer danceId,
                                @Valid @RequestBody Formation formation){
        danceRepository.findById(danceId).map(dance -> {
            formation.setDance(dance);
            return formationRepository.save(formation);
        }).orElseThrow(()-> new ResourceNotFoundException("danceID " + danceId + " not found"));
    }

    @PutMapping("/dance/{danceId}/formations/{formationId}")
    public void updateFormation(@PathVariable (value = "danceId") Integer danceId,
                                 @PathVariable (value = "formationId") Integer formationId,
                                 @Valid @RequestBody Formation formation) {
        if(!danceRepository.existsById(danceId)) {
            throw new ResourceNotFoundException("DanceId " + danceId + " not found");
        }
        if(formationRepository.existsById(formationId)){
            formationService.update(formation);
        } else {
            throw new ResourceNotFoundException("FormationId " + formationId + " not found");
        }

    }


    @RequestMapping(value = "/dance/{danceId}/formation/{formationId}", method = DELETE)
    public void deleteFormation(@PathVariable (value = "danceId") Integer danceId,
                                           @PathVariable (value = "formationId") Integer formationId) {
        if(!danceRepository.existsById(danceId)) {
            throw new ResourceNotFoundException("DanceId " + danceId + " not found");
        }
        if(formationRepository.existsById(formationId)){
            formationRepository.delete(formationRepository.findByIdAndDance_Id(formationId, danceId));
        } else {
            throw new ResourceNotFoundException("FormationId " + formationId + " not found");
        }
    }
}
