/**
 * Converts an array to a linked list
 * which has the format of a node
 * {
 *      val: int,
 *      next: node | undefined
 * }
 */
export const arrayToLinkedList = (array) => {
    var toReturn = {
        val: array[0],
        next: undefined,
    };

    var pointer = toReturn;

    for (var index = 1; index < array.length; index++) {
        pointer.next = {
            val: array[index],
            next: undefined,
        };
        pointer = pointer.next;
    }

    return toReturn;
};
