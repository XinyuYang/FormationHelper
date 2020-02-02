package formationHelper.Controller;

import formationHelper.Exception.ResourceNotFoundException;
import formationHelper.Model.Dance;
import formationHelper.Repository.DanceRepository;
import formationHelper.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DanceController {
    @Autowired
    private DanceRepository danceRepository;
    @Autowired
    private UserRepository userRepository;

    // Function: Get all of the dances created by the owner of the account
    // Usage: This can be used in the home/page to let users view all dances created by themselves
    @GetMapping("/user/{userId}/getAllDances")
    public @ResponseBody Page<Dance>getAllDancesFromUser(@PathVariable (value = "userId") Integer userId,
                                  Pageable pageable){
        return danceRepository.findByUserId(userId, pageable);
    }

    // Function: Get all dances from the server
    // Usage: 1. Implement a proper search method (E.G. return all dances from server with a Pageable, sorted by alphabetical order)
    //        2. Allow users to view all dances in the server, choosing one to start building (not from scratch)
    @GetMapping("/getAllDances")
    public @ResponseBody Page<Dance>getAllDances(Pageable pageable){
        return danceRepository.findAll(pageable);
    }

    // Function: create a dance and store related information into database
    // Usage: can be used with the create button after user fill out the required information to build a formation
    @PostMapping("/user/{userId}/createDance")
    public @ResponseBody Dance addDance(@PathVariable(value = "userId") Integer userId,
                          @RequestBody Dance dance){
        return userRepository.findById(userId).map(user -> {
            dance.setUser(user);
            return danceRepository.save(dance);
        }).orElseThrow(() -> new ResourceNotFoundException("UserId "+userId+" Not Found"));
    }

    // Function: update the related information for a specific dance
    // Usage: can be used for the save button that saves all the changes made in the dance
    @PutMapping("/user/{userId}/saveDance/{danceId}")
    public @ResponseBody Dance saveDance(@PathVariable (value="userId") Integer userId,
                                         @PathVariable (value="danceId") Integer danceId,
                                         @RequestBody Dance danceRequest){
        if(!userRepository.existsById(userId)){
            throw new ResourceNotFoundException("userId "+userId+" not found");
        }
        return danceRepository.findById(danceId).map(dance -> {
            dance.setDance_name(danceRequest.getDance_name());
            dance.setMusic_url(danceRequest.getMusic_url());
            dance.setNumDancers(danceRequest.getNumDancers());
            return danceRepository.save(dance);
        }).orElseThrow(() -> new ResourceNotFoundException("DanceId "+danceId+" Not Found"));
    }
    // Function: delete the specific dance
    // Usage: can be used with the PutMapping that updatse/saves dance 
    // !!  => delete the original record in database, then save it
    @DeleteMapping("/user/{userId}/deleteDance/{danceId}")
    public ResponseEntity<?> deleteDance(@PathVariable (value = "userId") Integer userId,
                                             @PathVariable (value = "danceId") Integer danceId){
        return danceRepository.findByIdAndUserId(danceId, userId).map(dance ->{
            danceRepository.delete(dance);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Dance not found with id "+danceId+" and UserId "+userId));
    }
}
