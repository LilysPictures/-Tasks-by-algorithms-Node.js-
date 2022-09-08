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

function hobby(n, arr) {
      var outputArray = [];
        var count = 0;
        var start = false;
        for (j = 0; j < arr.length; j++) {
            for (k = 0; k < outputArray.length; k++) {
                if ( arr[j] == outputArray[k] ) {
                    start = true;
                }
            }
            count++;
            if (count == 1 && start == false) {
                outputArray.push(arr[j]);
            }
            start = false;
            count = 0;
        }
        console.log(outputArray.join("\n"));
  
}


function solve() {
  const n = readInt();
  const arr= arrLines(n)
let res = hobby(n, arr);


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


