/**
 * Formation refers to a specific timeframe within a dance
 * where dancers have a speicific formation
 * Author: Rock Pang
 */
package com.formationHelper.formationHelper;

import java.util.List;

public class Formation {
    private int id;
    private int numDancers;
    private String name;
    private int duration;  // in seconds
    private Time startTime, endTime;
    private List<Dancer> dancers;

    /**
     * The formation has id, name, duration (minutes, seconds for a dance)
     * dancerMap, idMap are helper map to get and remove
     * TODO:
     *      Add default Formation for different number of people
     */

    public Formation(int id, String name, int numDancers, Time startTime, Time endTime) {
        this.id = id;
        this.name = name;
        this.numDancers = numDancers;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = (endTime.getMinute() - startTime.getMinute()) * 60 +
                (endTime.getSecond() - startTime.getSecond());

    }

    /**
     * Get a list of dancers with x, y coordinates
     */
    public List<Dancer> getFormation() {
        return this.dancers;
    }

    @Override
    public String toString() {
        return "ID: " + id + "; Name: " + name + "; " +
                "start: " + startTime.getMinute() + " minute " + startTime.getSecond() + "; " +
                "end: " + endTime.getMinute() + " minute " + endTime.getSecond() + "; " +
                "duration: " + duration;
    }
}

