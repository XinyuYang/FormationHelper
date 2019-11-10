package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Dance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DanceRepository extends JpaRepository<Dance, Integer> {
    public Dance findDanceByDance_name(String name);

    public void deleteDanceByDance_name(String name);
}
