package formationHelper.Controller;

import formationHelper.Exception.ResourceNotFoundException;
import formationHelper.Model.User;
import formationHelper.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/addUser")
    public @ResponseBody String addUser(@RequestBody User user){
        userRepository.save(user);
        return "Saved";
    }

    @DeleteMapping(path = "/deleteUser/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer userId){
        return userRepository.findById(userId).map(user ->{
            userRepository.delete(user);
            return ResponseEntity.ok().build();
        }).orElseThrow(()-> new ResourceNotFoundException("UserId " + userId + " Not Found"));
    }
}
