/**
 * Result:
 * Runtime - beats 7.81%
 * Memory - beats 16.71%
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Sort the array
    var sortedArray = [...nums].sort( function(a,b){return a-b});

    var originalLocs = mapOriginalIndices(nums, sortedArray);

    // loop and search unless it's too big, then skip to next number. 
    for(let firstIndex = 0; firstIndex < nums.length -1; firstIndex++){
            for(let secondIndex=firstIndex+1; secondIndex < nums.length; secondIndex++){
                
                let sum = sortedArray[firstIndex] + sortedArray[secondIndex]; 

                if( sum === target){
                    return [originalLocs[firstIndex], originalLocs[secondIndex]];
                }
                if(sum > target){
                    break;
                }
            }
        }

        return[];

}

/**
 * Create a lookup function for the sorted array index, to the original array index.
 * 
 * @param {array[number]} original 
 * @param {array[number]} sorted 
 * @returns {array[number]}
 */
var mapOriginalIndices = function(original, sorted) {
    var result = [];
    var indicesUsed = [];


    for(let i= 0; i < sorted.length ; i++ ){

        let loc = original.indexOf(sorted[i]);
        
        while(indicesUsed[loc] !== undefined){
            loc = original.indexOf(sorted[i], loc+1)
        }

        result[i] = loc;
        indicesUsed[loc] = 1;
    }


    return result;
}
