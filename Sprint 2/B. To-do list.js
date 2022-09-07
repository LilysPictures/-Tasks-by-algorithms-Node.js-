/*
Comment it before submitting
class Node {  
  constructor(value = null, next = null) {  
    this.value = value;  
    this.next = next;  
  }  
}
*/
function solution(node0, index) {
  var node = node0;
  function GetNode(node, index) {
    while (index != 0) {
      node = node.next;
      index--;
    }
    return node;
  }
  function Remove(node, index) {
    if (index === 0) {
      if (node != null) {
        node = node.next;
        return node;
      }
    }
  }
  if (index === 0) {
    var remove = Remove(node, index);
    return remove;
  } else {
    var prev = GetNode(node, index - 1);
    prev.next = prev.next.next;
    return node;
  }
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var newHead = solution(node0, 1);

  // result is node0 -> node2 -> node3
}
