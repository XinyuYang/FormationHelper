package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Dancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DancerRepository extends JpaRepository<Dancer, Integer> {

}