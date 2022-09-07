const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function resultR(n, comands) {
 
class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
    this.maxValues = [];
  } 
  
push(x) {
      if (this.size === 0 || x >= this.get_max()) {
      this.maxValues.push(x)
    }
      else {
      this.maxValues.push(this.get_max())
    }
      this.size += 1
    this.data.push(x);
    return this.data
  }

pop() {
      if (this.size > 0) {
      this.size -= 1;
      this.maxValues.pop()
      return this.data.pop()
    }
  }

get_max() {
    return this.maxValues[this.size - 1]
  }

}
let stack = new Stack()

var result =[];
comands.forEach((el) =>{ 
  if(el === "pop") {
    if (stack.size === 0){result.push("error")}
    else{stack.pop()}
}
else if  (el.includes("push")) {
var numEl = Number(el.replace(/[^0-9\.-]+/g,""))
        stack.push(numEl) 
  }
  else if (stack.data.length === 0){result.push("None")} else { result.push(stack.get_max())  }
})
return result


}

function solve() {
    const n = readInt();
    const comands = arrLines(n);
    process.stdout.write(`${resultR(n, comands).join('\r\n')}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
  }
  function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}
function arrLines(n) {
  var arr = [];
  for (let i = 0; i !== n; i++) {
    arr.push(readLine());
  }
  return arr;
}
