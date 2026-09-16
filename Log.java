// TwoSum.java
/*
    Given an integer array and target, return the indices of the two numbers that adds up to the target. All tests have at least one solution. Only one such pair exists in the given array.

    Test Case 1:

    nums = [2, 7, 11, 15]
    target = 9

    Answer = [0, 1]

    Test Case 2:

    nums: [3, 5, 7, 2, 4]
    target = 12

    Answer: [1, 2]

    Test Case 3:

    nums: [3, 3]
    target: 6

    Answer: [0, 1]
*/


import java.util.*;
import java.io.*;
public class TwoSum {
    public static void main(String[] args) {
        int n = 5;
        for(int i=1; i<=n; i*=2){
            System.out.println(i);
        }
    }
}

/*
    Time Complexity Analysis

    1. Assume the values for n:

    n = 5, i = 1, 2, 4
    total executions = 3

    n = 10, i = 1, 2, 4, 8
    total executions = 4

    n = 20, i = 1, 2, 4, 8, 16
    total executions = 5

    n = 40, i = 1, 2, 4, 8, 16, 32
    total executions = 6

    2. Generalize the pattern

    
*/