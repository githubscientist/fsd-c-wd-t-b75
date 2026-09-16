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
        // int[] numbers = { 2, 7, 11, 15 };
        // int target = 9;

        int[] numbers = {3, 5, 7, 2, 4};
        int target = 12;

        // int[] numbers = { 3, 3 };
        // int target = 6;

        int result[] = findPairs(numbers, target);
        System.out.println(Arrays.toString(result));
    }

    // static int[] findPairs(int numbers[], int target){
    //     int[] result = new int[2];
    //     // Algorithm 1: Brute Force
    //     // Generate all the possible pairs
    //     // O(n^2)
    //     for(int i=0; i<numbers.length-1; i++){
    //         for(int j=i+1; j<numbers.length; j++){
    //             // for each pair, find the sum and check if the sum is equal to the target
    //             if(numbers[i] + numbers[j] == target){
    //                 // if yes, return the indices
    //                 result[0] = i;
    //                 result[1] = j;

    //                 return result;
    //             }
    //         } 
    //     }
    //     return result;
    // }

    // static int[] findPairs(int numbers[], int target){
    //     int[] result = new int[2];
    //     // Algorithm 2: Hashing Technique
    //     // O(n)

    //     // create an empty hashmap integer <- hashMap
    //     HashMap<Integer, Integer> hashMap = new HashMap<>();

    //     // iterate the array <- i
    //     for (int i = 0; i < numbers.length; i++) {
    //         // for each number, find the difference target - numbers[i]
    //         int difference = target - numbers[i];

    //         // check if the difference exists in HashMap
    //         if (hashMap.containsKey(difference)) {
    //             // return the indices
    //             // [i, hashMap[target-numbers[i]]]   
    //             result[1] = i;
    //             result[0] = hashMap.get(difference);
    //             return result;
    //         }

    //         // if the difference does not exists
    //         // create a new entry in the hashMap for numbers[i]     
    //         hashMap.put(numbers[i], i);       
    //     }
    //         // return the empty array just to fix the java issue
    //         return result;
    // }

    static int[] findPairs(int numbers[], int target){
        int[] result = new int[2];
        // Algorithm 2: Two Pointers Technique
        // O(n logn)
        // Sort the array
        Arrays.sort(numbers);
        System.out.println(Arrays.toString(numbers));

        // assign two pointers
        int left = 0, right = numbers.length - 1;

        // iterate the pointers until we get a match
        while (left < right) {
            // add the numbers at left, right indices and check if it equals the target
            // if there is a match, return the indices   
            if (numbers[left] + numbers[right] == target) {
                result[0] = left;
                result[1] = right;
                return result;
            } else {
                // left + right != target
                // two possibilities
                // either left + right < target, or left + right > target
                if (numbers[left] + numbers[right] < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
            // return the empty array just to fix the java issue
            return result;
    }
}

// 769. Quadratic Equation Solver from guvi code kata explain this one.