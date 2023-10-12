/*
Runtime: 67ms - Beats 38.10%, then 52ms beats 86.41%
Memory: 43.97MB - beats 81.88%, then 44.18MB beats 68.72%
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Since we know what the total sum should be n * (n+1)/2
    let expectedSum = nums.length * (nums.length+1) / 2;
    let totalSum = 0;
    for (const num of nums){
        totalSum += num;
    }
    
    // And then subtract the returned sum from the expected sum to find the missing number
    return expectedSum - totalSum;
};