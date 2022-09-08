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

function closestNull(arr, n) {
  let dist = new Array(n).fill(0);

  if (arr[0] == 0) {
    dist[0] = 0;
  } else {
    dist[0] = Number.MAX_SAFE_INTEGER;
  }
  for (i = 1; i < n; ++i) {
    dist[i] = dist[i - 1] + 1;
    if (arr[i] == 0) {
      dist[i] = 0;
    }
  }
  if (arr[n - 1] == 0) {
    dist[n - 1] = 0;
  }
  for (i = n - 2; i >= 0; --i) {
    dist[i] = Math.min(dist[i], dist[i + 1] + 1);
    if (arr[i] == 0) {
      dist[i] = 0;
    }
  }
  return dist;
}

function solve() {
  const n = readInt();
  const arr = readArray();
  process.stdout.write(`${closestNull(arr, n).join(" ")}`);
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
    .map(Number);
  _curLine++;
  return arr;
}
