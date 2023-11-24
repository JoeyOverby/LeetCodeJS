import { arrayToLinkedList } from '../helpers/linkedList.js';
import { prettyPrint } from '../helpers/objects.js';
import { mergeTwoLists } from './mergeSortedLists.js';

var list1 = arrayToLinkedList([1, 2, 4]);
var list2 = arrayToLinkedList([1, 3, 4]);

var answer = mergeTwoLists(list1, list2);

console.log(`--------\n Returned Answer: ${prettyPrint(answer, false)}`);
