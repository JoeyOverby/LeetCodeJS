/*
Runtime: 59ms
Beats 34.39%

Memory: 45.70MB
Beats 5.78%

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1; // No items, so won't match
    }

    // Set initial bounds on the array to search
    let leftBound = 0;
    let rightBound = nums.length - 1;

    while (leftBound !== rightBound) {
        // Find midpoint and compare value there to target value
        let halfwayIndex = Math.round((rightBound + leftBound) / 2);
        let value = nums[halfwayIndex];

        // See if the index happens to be the number
        if (value === target) {
            return halfwayIndex;
        }

        if (target < value) {
            // adjust ending bound to be this new index (-1)
            rightBound = halfwayIndex - 1;
        }

        if (target > value) {
            // adjust left bound to be this index + 1
            leftBound = halfwayIndex + 1;
        }

        // Check Edge Condition and return not found if they occur
        if (leftBound > rightBound) {
            return -1; // Hit right edge of array and target is greater than maximum element
        }
    }

    // If we have one number left, either it is the nmatch, or it it's not in the array
    return nums[leftBound] === target ? leftBound : -1;
};
