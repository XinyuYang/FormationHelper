package com.formationHelper.formationHelper.Repository;

import com.formationHelper.formationHelper.Model.Dance;
import com.formationHelper.formationHelper.Model.Dancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DanceRepository extends JpaRepository<Dance, Integer> {
}
