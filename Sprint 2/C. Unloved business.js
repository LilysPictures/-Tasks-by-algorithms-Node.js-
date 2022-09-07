/*
Comment it before submitting
class Node {  
  constructor(value = null, next = null) {  
    this.value = value;  
    this.next = next;  
  }  
}
*/

function solution(node0, elem) {
    var index = 0;
    var node = node0;
  
    while (node != null){
      if(node.value == elem) {
        return index
      } 
          index += 1
          node = node.next
          }
      return -1
  }
  
  function test() {
      var node3 = new Node("node3");
      var node2 = new Node("node2", node3);
      var node1 = new Node("node1", node2);
      var node0 = new Node("node0", node1);
      var idx = solution(node0, "node2");
      // result is idx === 2
  }