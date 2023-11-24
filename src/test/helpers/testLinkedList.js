import { arrayToLinkedList } from '../../helpers/linkedList.js';
import { prettyPrint } from '../../helpers/objects.js';

var arrayForLinkedList = [1, 2, 3];

var linkedList = arrayToLinkedList(arrayForLinkedList);

prettyPrint(linkedList);
