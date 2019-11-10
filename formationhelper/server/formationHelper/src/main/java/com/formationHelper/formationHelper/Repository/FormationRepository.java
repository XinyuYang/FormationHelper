package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Formation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Integer> {
    public Page<Formation> findByDance_Id(Integer id, Pageable pageable);

    public Formation findByIdAndDance_Id(Integer formationId, Integer danceId);
}