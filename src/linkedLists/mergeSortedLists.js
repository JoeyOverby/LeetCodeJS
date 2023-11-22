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
var mergeTwoLists = function(list1, list2) {
    
    var toReturnHead;
    var listOneNext = list1;
    var listTwoNext = list2;
    var toReturnLatest;


    console.log(`${JSON.stringify(list1, null, 2)}`);
console.log('done');

    console.log(nodeToString(list1));
    console.log(nodeToString(list2));


console.log(`list1Val: ${list1.val}`);

    // Get the first element for our returned list
    if(list1.val <= list2.val){
        var toReturnHead = { val: listOneNext.val, next: undefined};
        listOneNext = listOneNext.next;
    }else{
        var toReturnHead =  { val: listTwoNext.val, next: undefined};
        listTwoNext = listTwoNext.next;
    }


    console.log('HEREEEEEE!');


    toReturnLatest = toReturnHead;

    while(listOneNext && listTwoNext){
        console.log(`listOneNext: ${nodeToString(listOneNext)} -- listTwoNext: ${nodeToString(listTwoNext)}`);
        // Calculate out the next element
        if(listOneNext.val <= listTwoNext.val){
            toReturnLatest.next = { val: listOneNext.val, next: undefined}            
            listOneNext = listOneNext.next; // Increment pointer
        }else{
            toReturnLatest.next = { val: listTwoNext.val, next: undefined}
            listTwoNext = listTwoNext.next; // Increment pointer
        }
        // Increment the toReturnLatest pointer to the most recent value
        toReturnLatest = toReturnLatest.next;
    }



    console.log('HEREEEEEE2222!');

        console.log(`listOneNext: ${nodeToString(listOneNext)} -- listTwoNext: ${nodeToString(listTwoNext)}`);

    console.log(JSON.stringify(toReturnHead,null,2));
    // One of the lists is now empty, so put the rest of the not empty list onto the list to return. 
    if(listOneNext){
        toReturnLatest.next = listOneNext;
    }else{
        toReturnLatest.next = listTwoNext;
    }


    console.log(JSON.stringify(toReturnHead,null,2));

    return toReturnHead;

};

const nodeToString = (node) => {
    if(node && node.val){
        return `{val: ${node.val}, next: ${node.next ? 'exists' : 'undefined'}}`;
    }else{
        return 'undefined';
    }
}