package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Dancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DancerRepository extends JpaRepository<Dancer, Integer> {
    public Dancer findDancerByName(String name);

    public void deleteDancerByName(String name);
}