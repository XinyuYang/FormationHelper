package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Integer> {

}