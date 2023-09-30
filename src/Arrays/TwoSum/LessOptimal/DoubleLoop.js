/**
 * Result:
 * RunTime: Beats 35.11%
 * Memory: Beats 46.05%
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let firstIndex = 0; firstIndex < nums.length -1; firstIndex++){
        for(let secondIndex=firstIndex+1; secondIndex < nums.length; secondIndex++){
            if(nums[firstIndex] + nums[secondIndex] === target){
                return [firstIndex, secondIndex];
            }
        }
    }

    return[];

}