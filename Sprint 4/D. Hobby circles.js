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
function longestUniqueSubsttr(str)
{
    var n = str.length;
    var res = 0;
    for(var i = 0; i < n; i++){
      
        var visited = new Array(256);
        for(var j = i; j < n; j++){
         
            if (visited[str.charCodeAt(j)] == true)
                break;
 
           
            else
            {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    console.log(res);
}


function solve() {
  const str = readLine();
var len = longestUniqueSubsttr(str);
}

function readInt() {
    const a = Number(_inputLines[_curLine]);
    _curLine++;
    return a;
}

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
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


