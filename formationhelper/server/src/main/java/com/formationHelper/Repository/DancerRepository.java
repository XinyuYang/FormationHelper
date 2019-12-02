package com.formationHelper.Repository;

import com.formationHelper.Model.Dancer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DancerRepository extends JpaRepository<Dancer, Integer> {
    public Page<Dancer> findByFormationId(Integer formationId, Pageable pageable);
    Optional<Dancer> findByIdAndFormationId(Integer id, Integer formationId);
}

