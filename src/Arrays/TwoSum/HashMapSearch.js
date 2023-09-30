/**
 * Runtime
Details
53ms
Beats 86.31%of users with JavaScript
Memory
Details
46.49MB
Beats 5.10%of users with JavaScript
 */

// I bet if I used an object instead of an array, it would be lower memory...


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // create hashmap of values. 

    const lookup = [];

    for(let i=0; i<nums.length; i++){
        if(!lookup[nums[i]]){
            lookup[nums[i]] = [i]
        }else{
            // There's already a value here, so add to it (must be one solution, so can't have more than 2 values here and it be a usable solution)
            let origVal =  lookup[nums[i]][0];
            lookup[nums[i]] = [ origVal, i];
        }
    }


    // Try to find a match
    for(let i=0; i<nums.length; i++){
        let neededNumber = target - nums[i];

        const matchingLocs = lookup[neededNumber];
        
        if(matchingLocs !== undefined){
          
            // see if there's one or more values here.
            if(matchingLocs.length === 1){
                if(matchingLocs[0] !== i){
                    // Can't return our own index twice -
                return[i,matchingLocs[0]];
                }
            }else{
                return matchingLocs;
            }
        }
    }

    return[];

}
