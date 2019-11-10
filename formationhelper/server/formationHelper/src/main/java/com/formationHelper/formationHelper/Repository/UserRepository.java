package com.formationHelper.formationHelper.Repository;


import com.formationHelper.formationHelper.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
