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
 
function cookies(n, cookie, m, children) { 
   let child = children.sort(function (a, b) { 
    if (a > b) { 
      return -1; 
    } 
    if (a < b) { 
      return 1; 
    } 
    return 0; 
  }); 
   let cook = cookie.sort(function (a, b) { 
    if (a > b) { 
      return -1; 
    } 
    if (a < b) { 
      return 1; 
    } 
    return 0; 
  }); 
    

let count = 0; 
child.forEach((greedy) => {
  for(let i =0; i < cook.length; i++){
  
    if(greedy <= cook[i] ){
              count++;
              cook.splice(i, 1)
         break
    }
  }
})
console.log( count)


} 
 
function solve() { 
  const n = readInt(); 
  const cookie = readArray(); 
  const m = readInt(); 
  const children = readArray(); 
let cook = cookies(n, children, m, cookie) 
} 
 
function readInt() { 
  const n = Number(_inputLines[_curLine]); 
  _curLine++; 
  return n; 
} 
 
function readArray() { 
  var arr = _inputLines[_curLine] 
    .trim(" ") 
    .split(" ") 
    .map((num) => Number(num)); 
  _curLine++; 
  return arr; 
}