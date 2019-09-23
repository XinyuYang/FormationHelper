//Dance contains the basic information of the dance and a set of Formations.

package com.formationHelper.formationHelper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Dance {
    private int dance_id;
    private int numDancers;
    private String dance_name;
    private String music_url; // upload music or music_url to database?
    private List<Dancer> dancers;
    private Map<Integer, Dancer> dancerMap;
    private Map<Integer, Integer> idMap;
    private List<Formation> AllFormations;
    private int currentFormationID;
    private Time nextStartTime;


    public Dance(int dance_id, int numDancers, String dance_name, String music_url, List<Dancer> dancers) {
        this.dance_id = dance_id;
        this.numDancers = numDancers;
        this.dance_name = dance_name;
        this.music_url = music_url;
        // set defaultFormation
        Time start = new Time(0,0);
        Time end = new Time(0,10);
        nextStartTime = end;
        Formation defaultFormation = new Formation(0, dance_name, numDancers, start, end);
        this.AllFormations.add(defaultFormation);
        this.currentFormationID = 0;
        this.dancers = dancers;
        this.dancerMap = new HashMap<>();
        this.idMap = new HashMap<>();
    }

    public String getDance_name(){ return this.dance_name; }
    public int getDance_id(){ return this.dance_id; }


    /**
     * addDancer(), deleteDancer(), getDancer() copied from Formation wrote by Rock Pang
     */
    public void addDancer(int dancer_id, String dancerName, double x, double y) {
        if(idMap.size() > numDancers) { // check if there are more people than required
            System.err.println("Warning: more dancers than designed");
            return;
        }

        Dancer newDancer = new Dancer(dancer_id, dancerName, x, y);
        dancers.add(newDancer);
        dancerMap.put(dancer_id, newDancer);
        idMap.put(dancer_id, dancers.size()-1);   // Go find the index in list
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

    /**
     * Note :
     * 1. Formation's id is the id in the List AllFormation and subject to change
     *    I keep the id parameter in Formation constructor for now
     * 2. Called when user click "Add" to initialize a Formation
     * TODO :
     * 1. display default Formation on the screen for user to change
     * 2. Read dancer Location from front end
     */
    public void addFormation(String name, int numDancers, Time startTime, Time endTime){
        Formation f = new Formation(AllFormations.size(), name, numDancers, startTime, endTime);
        // 1. display default Formation on the screen for user to change
        // 2. After user click "Save", read
        String dancerName = "Adia";
        double inputx = 0, inputy = 0;
        for (int i = 0; i < numDancers; i++){
            addDancer(i, dancerName, inputx, inputy);
        }
        AllFormations.add(f);
    }

    /**
     * Note :
     *    Called when user click "Save" to modify an existing Formation
     * TODO :
     *    Read dancer ID & Location from front end
     *    (only read changed ones if possible)
     */
    public void saveFormation(int Formation_id){
        Formation f = AllFormations.get(Formation_id);
        for (int i = 0; i < numDancers; i++){
            // Read data from front end
            double inputx = 0, inputy = 0;
            getDancer(i).setLocation(inputx, inputy);
        }
    }

    public void deleteFormation(int id){
        if(id >= AllFormations.size()) {
            System.err.println("Formation does not exist. Couldn't delete this Formation.");
            System.exit(-1);
        }
        AllFormations.remove(id);
    }

    /**
     * return a list of dancers' location for front end to display
     */
    public List<Dancer> displayFormation(int id){
        if(id >= AllFormations.size()) {
            System.err.println("Formation does not exist. Couldn't load this Formation.");
            System.exit(-1);
        }
        currentFormationID = id;
        Formation f = AllFormations.get(id);
        return f.getFormation();
    }

    @Override
    public String toString() {
        return "Dance{" +
                "dance_id=" + dance_id +
                ", numDancers=" + numDancers +
                ", dance_name='" + dance_name + '\'' +
                ", music_url='" + music_url + '\'' +
                ", AllFormations=" + AllFormations +
                ", currentFormationID=" + currentFormationID +
                '}';
    }
}


