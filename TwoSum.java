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
        int[] numbers = {2, 7, 11, 15};
        int target = 9;
        int result[] = findPairs(numbers, target);
        System.out.println(Arrays.toString(result));
    }
    
    static int[] findPairs(int numbers[], int target){
        int[] result = new int[2];
        // Algorithm 1: Brute Force
        // Generate all the possible pairs
        for(int i=0; i<numbers.length-1; i++){
            for(int j=i+1; j<numbers.length; j++){
                // for each pair, find the sum and check if the sum is equal to the target
                if(numbers[i] + numbers[j] == target){
                    // if yes, return the indices
                    result[0] = i;
                    result[1] = j;
                    
                    return result;
                }
            } 
        }
        return result;
    }
}

// 769. Quadratic Equation Solver from guvi code kata explain this one.