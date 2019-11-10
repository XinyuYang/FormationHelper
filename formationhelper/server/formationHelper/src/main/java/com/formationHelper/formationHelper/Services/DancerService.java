package com.formationHelper.formationHelper.Services;

import com.formationHelper.formationHelper.Model.Dancer;
import com.formationHelper.formationHelper.Repository.DanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

public class DancerService {
    @Autowired
    private DanceRepository danceRepository;
    public void update(Dancer dancer){

    }
}
