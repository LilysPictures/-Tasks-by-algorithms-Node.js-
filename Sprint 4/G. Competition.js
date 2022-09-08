/*
-- ПРИНЦИП РАБОТЫ --
На вход поступают массивы со словами. 
Первый массив - массив с документами (arrDocs).
Второй  - массив с запросами (arrRequest).
По запросу надо вывести 5 самых релевантных документов.
Оценка релевантности будет проходить в несколько этапов. 

1. Создадим хеш-мапу (dictDocs), в которой будут перечисляться и подсчитываться все слова из документов.
dictDocs будет выглядеть следующим образом
Map {
  'i' => { '0': 1 },
  'love' => { '0': 1, '1': 1 },
  .....
}
 
2. Идём в arrRequests. Создаем словарь dictUnickWords, для того, что бы оставить в запросе только уникальные, не повторяющиеся слова. 

3. Создаем новую таблицу count. В ней мы будем считать кол-во слов, которые есть и в Документе (dictDocs) и в Запросе (dictUnickWords) одновременно.

4. Итоговую count переводим в массив (res) и выполняем сортировку (итоговый массив result) по убыванию релевантности. 
Если релевантности документов совпадают — то оставляем порядок по возрастанию.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Вариант с созданием индекса, из слов в массивы пар, оказался наиболее оптимальным. 
Варианты, когда я проходилась по всем документам для каждого запроса, были слишком долгие. Индекс, позволил выполнять запросы быстрее. 

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
/// 1. Когда мы формируем первую хеш-таблицу dictDocs для хранения слов из Документов, временная сложность зависит от кол-ва слов содержащихся в документе = O(n*k). 
/// 2. Сложность второго этапа (создание индекса)  =  O(m * k1 * n * nlog(n)), где m - число запросов, k1 - число уникальных слов в запросе, n - число документов.
ИЗМЕНЕНО на:
Когда мы формируем хеш-таблицу dictDocs для подсчета и хранения слов из Документов, сложность зависит от кол-ва слов содержащихся в Документе = O(n*k). 
После того, как все Документы найдены, мы сортируем их в зависимости от Запросов, т.о сложность = O(m * k1 * n + m * n * logn), 
где m - число запросов, k1 - число уникальных слов в запросе, n - число документов.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
/// Пространственная сложность dictDocs - O(n*k).
/// Для построения поискового индекса и хранения релевантности требуется О(n) памяти.

ИСПРАВЛЕНО на:
Для построения поискового индекса и хранения релевантности требуется O(n*k) памяти.

*/


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

  // Создаем словарь с перечислением всех слов из arrDocs
function createDictDocs(arrDocs) {
  const dictDocs = new Map();
  for (let i = 0; i < arrDocs.length; i++) {
    let eachArrDocs = arrDocs[i];
    for (let j = 0; j < eachArrDocs.length; j++) {
      let wordDocs = eachArrDocs[j];
      if (dictDocs.has(wordDocs)) {
        let obj = dictDocs.get(wordDocs);
        if (obj[i]) {
          dictDocs.set(wordDocs, { ...obj, [i]: (obj[i] += 1) });
        } else {
          dictDocs.set(wordDocs, { ...obj, [i]: (obj[i] = 1) });
        }
      } else {
        dictDocs.set(wordDocs, { [i]: 1 });
      }
    } 
  }
  return dictDocs
}

function mostRelevant(arrRequests, dictDocs) {
  // Создаем новую таблицу для подсчета count и идём в Requests. Если найдем слово, которое содержится в dictDocs, то заносим его в counts
  count = {};
  for (let i = 0; i < arrRequests.length; i++) {   
    let eachArrRequests = arrRequests[i];

  // Создаем словарь уникальных слов  
    let dictUnickWords = new Set(eachArrRequests);

dictUnickWords.forEach((wordRequests) => {
     if (dictDocs.has(wordRequests)) {
    // берем ключи слов, что бы занести их в новую таблицу count для подсчета кол-ва упоминаний
        keys = Object.keys(dictDocs.get(wordRequests));  
        for (const key of keys) {
          if (count[key]) {
            count[key] += dictDocs.get(wordRequests)[key];
          } else {
            count[key] = dictDocs.get(wordRequests)[key];
          }
        }
      }
})
// Создаём новый массив и заполняем его ключами .
    let res = [];
    keysRez = Object.keys(count);
  
    for (let j = 0; j < keysRez.length; j++) {
      value = count[keysRez[j]]
      res.push([++keysRez[j], value]);
      
    }
    // Выполняем сортировку
    let result = res
      .sort((prevPoints, nextPoints) => nextPoints[1] - prevPoints[1])
      .filter((points) => points[1] != 0);

    //Для каждого запроса выводим на одной строке номера пяти самых релевантных документов.  
    const MAX_RESULTS = 5;
    for (let i = 0; i < MAX_RESULTS && i < result.length; ++i)
    process.stdout.write(result[i][0] + " ");
    process.stdout.write("\n");
    //Очищаем счетчик, после каждого цикла
    count = {};
  }
}

function solve() {
  const n = readInt();
  const arrDocs = arrLines(n);
  const m = readInt();
  const arrRequests = arrLines(m);
  const dictDocs = createDictDocs(arrDocs);
  const finish = mostRelevant(arrRequests, dictDocs);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}
function readInt() {
  const m = Number(_inputLines[_curLine]);
  _curLine++;
  return m;
}
function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
}
function readArray() {
  let arr = _inputLines[_curLine].trim(" ").split(" ");
  _curLine++;
  return arr;
}
function arrLines(n) {
  let arr = [];
  for (let i = 0; i !== n; i++) {
    arr.push(readLine().trim(" ").split(" "));
  }
  return arr;
}
function arrLines(m) {
  let arr = [];
  for (let i = 0; i !== m; i++) {
    arr.push(readLine().trim(" ").split(" "));
  }
  return arr;
}

