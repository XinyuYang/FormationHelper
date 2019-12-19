package com.formationHelper.Repository;

import com.formationHelper.Model.Dance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DanceRepository extends JpaRepository<Dance, Integer> {
    public Page<Dance> findByUserId(Integer userId, Pageable pageable);
    Optional<Dance> findByIdAndUserId(Integer id, Integer userId);
}
