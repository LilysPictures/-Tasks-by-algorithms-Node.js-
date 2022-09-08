const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function sortStrChars(str) {
  if (!str) {
    return;
  }
  str = str.split('');
  str = str.sort();
  str = str.join('');
  return str;
}

function anagram(n, A) {
 
  const dict = {};
  
  for (var i = 0; i < A.length; i++) {
   
    const word = sortStrChars(A[i]);
   
    if(word in dict === false){
       dict[word]= [i]
    }else {
      dict[word].push(i)
    }
  } 
  for ( word in dict) {
  console.log(dict[word].join(' ').toString());
}

}

function solve() {
  const n = readInt();
  const A = readArray();
  let res = anagram(n, A)
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
function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}