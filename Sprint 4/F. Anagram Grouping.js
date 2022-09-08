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

function isValid (n, str) {
 
          let map = new Map();
             map.set(0, -1);
          let res =0;
  let count_0 = 0, count_1 = 0;
  for(let i=0; i<str.length;i++){
         if(str[i]=='0')
            count_0++;
           else
           count_1++;
           if(map.has(count_1-count_0))
                    res =
                    Math.max(res, (i -
                    map.get(count_1-count_0)));
    
                else
                    map.set(count_1-count_0,i);
                  
            }
 console.log(res) 
}

function solve() {
 if(n=0){return 0}else{
  const n = readInt();}
  const str= readLine()
var len = isValid (n, str);
}

function readInt() {
    const a = Number(_inputLines[_curLine]);
    _curLine++;
    return a;
}

function readLine() {
  if (_inputLines[_curLine] === undefined ){return 0} else {
  const line = _inputLines[_curLine].split(" ").join("");
  _curLine++;
  return line;
  }
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}

function arrLines(n) {
  var arr = [];
  for (let i = 0; i !== n; i++) {
    arr.push(readLine());
  }
  return arr;
}


