package formationHelper.Controller;

import formationHelper.Exception.ResourceNotFoundException;
import formationHelper.Model.Formation;
import formationHelper.Repository.DanceRepository;
import formationHelper.Repository.FormationRepository;
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


    // This method is used to save each individual formation inside a dance.
    //TODO: maybe we do not need this (Shall we implement the method for user to save individual formation
    // Is this method required if we wanna implement autosave feature for each formation?
    // Should the autosave feature autosave all formations at once or only one formation?    !!!!IMPORTANT
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

    //TODO: Add one methods to save all formations at once (equivalent to save dance)
    // => corresponds to save dance button
    // This will save all the formations
    @PutMapping("/dance/{danceId}/saveAllFormations")
    public String saveAllFormation(@PathVariable (value="danceId") Integer danceId){
        return "Successfully saved";
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
