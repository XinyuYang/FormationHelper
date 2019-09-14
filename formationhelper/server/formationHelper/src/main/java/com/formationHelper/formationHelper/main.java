package com.formationHelper.formationHelper;

import java.util.List;

public class main {
    /**
     * This is the playground to test functionality
     * @param args
     */
    public static void main(String [] args) {
        Formation f = new Formation(2, "Formation 1", 6, new Time(0,1), new Time(1, 50));

        f.addDancer(1, "Rock Pang", 5.34, 6.78);
        f.addDancer(2, "Yuxiang Chen", 8.97, 3.42);
        f.addDancer(3, "Adia", 9.87, 100.5);

        for(Dancer dancer : f.getFormation()) {
            System.out.println(dancer);
        }

        f.deleteDancer(2);

        for(Dancer dancer : f.getFormation()) {
            System.out.println(dancer);
        }

        System.out.println(f.getDancer(4));
        System.out.println(f);
    }
}
