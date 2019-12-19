package com.formationHelper.Repository;

import com.formationHelper.Model.Formation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FormationRepository extends JpaRepository<Formation, Integer> {
    public Page<Formation> findByDanceId(Integer danceId, Pageable pageable);
    Optional<Formation> findByIdAndDanceId(Integer id, Integer danceId);
}
