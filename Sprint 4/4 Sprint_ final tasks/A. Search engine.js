/*
-- ПРИНЦИП РАБОТЫ --  
На вход поступают запросы get, put, delete.

put key value —– добавление пары ключ-значение. С помощью функции hashFunction вычисляем хэш-значение поступившего числа. И добавляем его в хеш-таблицу.
Если образовалась коллизия и соответствующая ячейка уже занята, мы используем метод цепочек для разрешения. 
Т.о, когда элементы хешируются в один слот, у нас образовывается цепочка из массива пар [[k, v], [k, v], ...]. 

get key –— получение значения по ключу. Начинаем с вычисления начального хэш-значения, предьявляем первый элемент по ключу.

delete key –— удаление ключа из таблицы. 


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Для разрешения коллизий, используем метод цепочек. Когда несколько элементов хэшируются в один слот, мы размещаем их в хэш-таблицу цепочкой. 

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Операция поиска элемента по хеш-таблице в лучшем случае имеет сложность O(1), в худшем - O(n). Зависит от наполнения корзины.
Общая временная сложность на обработку всех входных данных = O(n).
 
-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Память расходуется для хранения бакетов в HashTable, максимальный размер которой определяется заданным числом k, поэтому занимает O(k) памяти.

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

class HashTable {
    constructor() {
        this.table = [];
        this.size = 99971;
    }

    getHash(key) {
        return key;
    }

    getBucket(key) {
        return this.getHash(key) % this.size
    }

    getBucketItem(key, bucket) {
        if (!bucket) {
            return [null, -1]
        }
        const itemIndex = bucket.findIndex((el) => el && el[0] === key);
        if (itemIndex > -1) {
            return [bucket[itemIndex][1], itemIndex];
        } else {
            return [null, -1];
        }
    }

    put=(key, value)=>  {
      const bucketIndex = this.getBucket(key);
      const bucket = this.table[bucketIndex]
      if (bucket === undefined) {
          this.table[bucketIndex] = [[key, value]];
      } else {
          const [, index] = this.getBucketItem(key, bucket);
          if (index === -1) {
              const emptyIndex = this.table[bucketIndex].findIndex((e) => e === undefined);
              if (emptyIndex > -1) {
                  this.table[bucketIndex][emptyIndex] = [key, value];
              } else {
                  this.table[bucketIndex].push([key, value])
              }
          } else {
              this.table[bucketIndex][index][1] = value               
          }
      }
  }

    get=(key)=>  {
      const bucketIndex = this.getBucket(key);
      const bucket = this.table[bucketIndex];
        const [val] = this.getBucketItem(key, bucket);
        if (val) {
            return val;
        } else {
            return "None";
        }
    }

    remove=(key) => {
        const bucketIndex = this.getBucket(key);
        const bucket = this.table[bucketIndex]
        const [val, index] = this.getBucketItem(key, bucket);
        if (index > -1) {
            delete this.table[bucketIndex][index];
            return val;
        } else {
            return "None";
        }
    }
}

function solve() {
  const s = readInt();
  const request = arrLines(s);
  const myTable = new HashTable();
  let result = [];
  request.forEach((request) => {
    if (request !== undefined) {
      const [operation, key, value] = request.split(" ");   
        switch (operation) {
          case "get":         
            result.push(myTable.get(key));        
            break;
          case "put":
            myTable.put(key, value);
            break;
          case "delete":
            result.push(myTable.get(key));       
            myTable.remove(key);
            break;
        }     
    }
  });
   process.stdout.write(`${result.join("\r\n")}`);
}

function readInt() {
  const s = Number(_inputLines[_curLine]);
  _curLine++;
  return s;
}
function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
}
function arrLines(s) {
  let arr = [];
  for (let i = 0; i !== s; i++) {
    arr.push(readLine());
  }
  return arr;
}
