package com.formationHelper.formationHelper;

import java.util.List;

/**
 * Overveiw of setting order:
 * 1. User (id, name)
 * 2. Dance (dance_name, numDancers, music)
 * 3. Formation (user_id, dance_name, numDancers, startTime, endTime)
 * Author: Adia Wang
 */

public class User {
    private int user_id;
    private String user_name;
    private List<Dance> danceList;
    private Dance currentDance;

    public User(int user_id, String user_name){
        this.user_id = user_id;
        this.user_name = user_name;
    }

    /**
     * TODO
     * 1. read List of dancers from front end
     * 2. return a view of this dance with a default formation
     */
    public void setDance(int id, String name, int numDancers, String url, List<Dancer> dancers){
        Dance dance = new Dance(currentDance.getDance_id(), numDancers, name, url, dancers);
        danceList.add(dance);
        currentDance = dance;
        // return view;
    }

    // load from database
    // return a view
    public void loadDance(String name){
        for (Dance dance: danceList){
            if (dance.getDance_name().equals(name)){
                currentDance = dance;
                // return a view of currentDance
            }
        }
    }

    // save to database
    public void saveDance(){

    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_name='" + user_name + '\'' +
                ", danceVector=" + danceList +
                ", currentDance=" + currentDance +
                '}';
    }


}
