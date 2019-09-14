/**
 * Formation refers to a specific timeframe within a dance
 * where dancers have a speicific formation
 * Author: Rock Pang
 */
package com.formationHelper.formationHelper;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Formation {
    private int id;
    private int numDancers;
    private String name;
    private int duration;  // in seconds
    private Time startTime, endTime;

    private List<Dancer> dancers;
    private Map<Integer, Dancer> dancerMap;
    private Map<Integer, Integer> idMap;

    /**
     * The formation has id, name, duration (minutes, seconds for a dance)
     * dancerMap, idMap are helper map to get and remove
     *
     */
    public Formation(int id, String name, int numDancers, Time startTime, Time endTime) {
        this.id = id;
        this.name = name;
        this.numDancers = numDancers;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = (endTime.getMinute() - startTime.getMinute()) * 60 +
                (endTime.getSecond() - startTime.getSecond());

        this.dancers = new ArrayList<>();
        this.dancerMap = new HashMap<>();
        this.idMap = new HashMap<>();
    }

    /**
     * Get a list of dancers with x, y coordinates
     */
    public List<Dancer> getFormation() {
        return this.dancers;
    }

    public void addDancer(int id, String dancerName, double x, double y) {
        if(idMap.size() > numDancers) { // check if there are more people than required
            System.out.println("Warning: more dancers than designed");
            return;
        }

        Dancer newDancer = new Dancer(id, dancerName, x, y);
        dancers.add(newDancer);
        dancerMap.put(id, newDancer);
        idMap.put(id, dancers.size()-1);   // Go find the index in list
    }

    public void deleteDancer(int id) {
        if(!idMap.containsKey(id)) {
            System.out.println("Couldn't find the this dancer");
            return;
        }

        int index = idMap.get(id);
        dancers.remove(index);
        dancerMap.remove(id);
        idMap.remove(id);
    }

    public Dancer getDancer(int id) {
        if(!idMap.containsKey(id)) {
            System.out.println("Error: user not found!");
            return null;
        }
        return dancerMap.get(id);
    }

    @Override
    public String toString() {
        return "ID: " + id + "; Name: " + name + "; " +
                "start: " + startTime.getMinute() + " minute " + startTime.getSecond() + "; " +
                "end: " + endTime.getMinute() + " minute " + endTime.getSecond() + "; " +
                "duration: " + duration;
    }
}

