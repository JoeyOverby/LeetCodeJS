/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    var toReturnHead;
    var listOneNext = list1;
    var listTwoNext = list2;
    var toReturnLatest;

    // Get the first element for our returned list
    if (list1.val <= list2.val) {
        var toReturnHead = { val: listOneNext.val, next: undefined };
        listOneNext = listOneNext.next;
    } else {
        var toReturnHead = { val: listTwoNext.val, next: undefined };
        listTwoNext = listTwoNext.next;
    }

    toReturnLatest = toReturnHead;

    while (listOneNext && listTwoNext) {
        // Calculate out the next element
        if (listOneNext.val <= listTwoNext.val) {
            toReturnLatest.next = { val: listOneNext.val, next: undefined };
            listOneNext = listOneNext.next; // Increment pointer
        } else {
            toReturnLatest.next = { val: listTwoNext.val, next: undefined };
            listTwoNext = listTwoNext.next; // Increment pointer
        }
        // Increment the toReturnLatest pointer to the most recent value
        toReturnLatest = toReturnLatest.next;
    }

    // One of the lists is now empty, so put the rest of the not empty list onto the list to return.
    if (listOneNext) {
        toReturnLatest.next = listOneNext;
    } else {
        toReturnLatest.next = listTwoNext;
    }

    return toReturnHead;
};

export { mergeTwoLists };
