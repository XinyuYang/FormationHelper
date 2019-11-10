package com.formationHelper.formationHelper.Services;

import com.formationHelper.formationHelper.Model.Dance;
import com.formationHelper.formationHelper.Repository.DanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DanceService {
    @Autowired
    private DanceRepository danceRepository;


//
//    @Transactional
//    public void update(Integer id, String dance_name, List<Dancer> dancers, String music_url, Integer numDancers){
//        danceRepository.update(id, dance_name, dancers, music_url, numDancers);
//    }

    @Transactional
    public void save(Dance dance){
        danceRepository.save(dance);
    }

    public void delete(Integer id){

    }

    public void update(Dance dance){

    }




}
