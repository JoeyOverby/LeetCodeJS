import { arrayToLinkedList } from '../../helpers/linkedList.js';

var arrayForLinkedList = [1,2,3];

var linkedList = arrayToLinkedList(arrayForLinkedList);

console.log(JSON.stringify(linkedList, null, 2));