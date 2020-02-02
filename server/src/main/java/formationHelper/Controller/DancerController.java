package formationHelper.Controller;

import formationHelper.Exception.ResourceNotFoundException;
import formationHelper.Model.Dancer;
import formationHelper.Repository.DancerRepository;
import formationHelper.Repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class DancerController {
    @Autowired
    private FormationRepository formationRepository;
    @Autowired
    private DancerRepository dancerRepository;

    // Function: get all the dancers inside a specific formation
    // Usage: This allow front ened to view the information of all dancers
    // TODO: Consider moving function to danceController?
    @GetMapping("/formation/{formationId}/getAllDancers")
    public @ResponseBody Page<Dancer> getAllDancers(@PathVariable(value = "formationId") Integer formationId,
                                                       Pageable pageable){
        return dancerRepository.findByFormationId(formationId, pageable);
    }

    /**
     * Function: Add one dancer to the current formation with initial x, y positions
     *  (Initial x, y position not specified yet)
     * Usage: can be used for the "add_dancer" button for a formation
     * TODO: Consider moving function to danceController?
     * @param formationId
     * @param dancer
     */
    @PostMapping("/formation/{formationId}/addDancer")
    public @ResponseBody Dancer addDancer(@PathVariable(value = "formationId") Integer formationId,
                                            @RequestBody Dancer dancer){
        return formationRepository.findById(formationId).map(formation -> {
            dancer.setFormation(formation);
            dancer.setDance(formation.getDance());
            // Set initial x,y positions for this dancer -> 0.0 for now
            return dancerRepository.save(dancer);
        }).orElseThrow(() -> new ResourceNotFoundException("Formation Id "+formationId+" Not Found"));
    }

    /**
     * Function: Update all dancers in the specified formation
     * Usage: Mainly use for changing the x,y positions of all dancers in a given formation
     * @param formationId
     * @param dancersRequest
     * @return
     */
    @PutMapping("/formation/{formationId}/updateAllDancers")
    public @ResponseBody List<Dancer> saveDancer(@PathVariable (value="formationId") Integer formationId,
                                             @RequestBody List<Dancer> dancersRequest){
        List<Dancer> result = new ArrayList<>();
        if(!formationRepository.existsById(formationId)){
            throw new ResourceNotFoundException("Formation Id "+formationId+" not found");
        }
        for(Dancer dancerRequest: dancersRequest){
            result.add(dancerRepository.findById(dancerRequest.getId()).map(dancer -> {
                dancer.setName(dancerRequest.getName());
                dancer.setX(dancerRequest.getX());
                dancer.setY(dancerRequest.getY());
                return dancerRepository.save(dancer);
            }).orElseThrow(() -> new ResourceNotFoundException("Dancer Id "+dancerRequest.getId()+" Not Found"))
            );
        }
        return result;
    }
    
    /**
     * Function: delete a specific dancer inside a formation and dance
     * Usage: first delete then update => use together with the PutMapping above
     * @param formationId
     * @param dancerId
     * @return
     */
    @DeleteMapping("/formation/{formationId}/deleteDancer/{dancerId}")
    public ResponseEntity<?> deleteDancer(@PathVariable (value = "formationId") Integer formationId,
                                         @PathVariable (value = "dancerId") Integer dancerId){
        return dancerRepository.findByIdAndFormationId(dancerId, formationId).map(dancer ->{
            dancerRepository.delete(dancer);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Dancer not found with id "+dancerId+" and DanceId "+formationId));
    }
}
