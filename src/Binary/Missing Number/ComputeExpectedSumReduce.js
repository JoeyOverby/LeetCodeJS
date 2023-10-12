/*
Runtime: Beats 72.51%
Memory: Beats 44.9%
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Since we know what the total sum should be n * (n+1)/2
    let expectedSum = nums.length * (nums.length+1) / 2;
    
    // Calculate the sum of the array
    let totalSum = nums.reduce( (sum, currentValue) => {
        return sum + currentValue;
    }, 0);

    // And then subtract the returned sum from the expected sum to find the missing number
    return expectedSum - totalSum;
};