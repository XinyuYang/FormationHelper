package com.formationHelper.formationHelper;

import java.util.List;
import java.util.Map;

/**
 * Dancer class will implement more functionality in the future including
 * gender, phone #, class, photo, etc
 *
 */
public class Dancer {
    private int id;
    private String name;
    private double x, y;

    public Dancer(int id, String name, double x, double y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    public void setLocation(double x, double y){
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "ID: " + id + "; Name: " + name +
                "; x: " + x + "; y: " + y;
    }
}
