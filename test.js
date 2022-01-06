class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const arr = [1, 2, 3, 4, 5];
// prev: null
//            > 1 > 2 > 3 > 4 > 5 > null
//head                 tail

// 5 > 4 > 3 > 2 > 1 null
// 

var reverseList = function (head) {
  let current = head;
  let prev = null
  let next;

  while (current != null) {
    next = current //1
    current.next = prev // null
    prev = current;
    current = next;
  }

  return prev
};

reverseList(arr);
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   printNodes() {
//     let current = this.head;
//     while (current != null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }

//   unshift(data) {
//     let newNode = new Node(data)
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode
//     } else {
//       newNode.next = this.head;
//       this.head = newNode
//     }
//     this.length++
//     return this
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// //    A -> B -> C -> D -> null
// //   head                 tail

// const ll = new LinkedList();

// ll.unshift("A");

// ll.printNodes();

// console.log(ll);

// a.next = b;
// b.next = c;
// c.next = d;

// // Iterative print. Traverse and Print list
// function printNodes(head) {
//   let current = head;
//   while (current != null) {
//     console.log(current.value);
//     current = current.next;
//   }
// }

// recursivePrintNodes(a);

// // Recursive print

// function recursivePrintNodes(head) {
//   let current = head
//   console.log(current.value)
//   if(head.next === null) return
//   return recursivePrintNodes(current.next)
// }
