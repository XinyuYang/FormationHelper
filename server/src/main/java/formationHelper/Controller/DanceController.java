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

    @GetMapping("/user/{userId}/getAllDance")
    public @ResponseBody Page<Dance>getAllDance(@PathVariable (value = "userId") Integer userId,
                                  Pageable pageable){
        return danceRepository.findByUserId(userId, pageable);
    }

    @PostMapping("/user/{userId}/createDance")
    public @ResponseBody Dance addDance(@PathVariable(value = "userId") Integer userId,
                          @RequestBody Dance dance){
        return userRepository.findById(userId).map(user -> {
            dance.setUser(user);
            return danceRepository.save(dance);
        }).orElseThrow(() -> new ResourceNotFoundException("UserId "+userId+" Not Found"));
    }

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
    @DeleteMapping("/user/{userId}/deleteDance/{danceId}")
    public ResponseEntity<?> deleteDance(@PathVariable (value = "userId") Integer userId,
                                             @PathVariable (value = "danceId") Integer danceId){
        return danceRepository.findByIdAndUserId(danceId, userId).map(dance ->{
            danceRepository.delete(dance);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Dance not found with id "+danceId+" and UserId "+userId));
    }
}
