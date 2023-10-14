/*
*Runtime: 61ms : Beats 87.53%
Memory: 45.28MB : Beats 47.44%
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    const hashMap = createHashMapCount(s);

    /*  Now instead of creating a second hashmap and comparing them
        simply go through the second string and if you find that character decrement the count of the first.
    */
    for ( const char of t){
        const currentVal = hashMap.get(char);
        if(currentVal === undefined){
            // Value isn't in the other string
            return false;
        }else{
            if(currentVal === 1){
                // We found the only time that character was used, so remove it from our hashMap
                hashMap.delete(char)
            }else{
                // decrement count
                hashMap.set(char, currentVal -1 );
            }
        }
    }

    if(hashMap.size === 0){
        return true;
    }else{
        return false;
    }

};

/**
* Create a HashMap from a string where each letter is a key, and the value is the number of times it was seen
 */
const createHashMapCount =  (string) => {

    const toReturn = new Map();

    for( const char of string){
        const currentVal = toReturn.get(char) || 0;
        toReturn.set(char, currentVal+1);
    }

    return toReturn;
}