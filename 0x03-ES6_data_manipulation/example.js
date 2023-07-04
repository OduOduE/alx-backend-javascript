const nums = [1, 2, 3, 4, 5];
const triNums = nums.map((num) => num * 3);
console.log(triNums);

let triple = triNums.filter((num) => num % 2 == 0);
console.log(triple);

const res = nums.reduce((l, num) => l + num);
console.log(res);

// Create an array to hold 4 bytes of data
const buffer = new ArrayBuffer(4);

// Create a view of the arrayBuf as an Int32Array
const int32View = new Int32Array(buffer)

// Set values in the array
int32View[0] = 142;
console.log(int32View[0]);

int32View[0] = [];

// Access the values in the array
console.log(int32View[0]);
console.log()
const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set.size); // Output: 3
console.log(set.has(2)); // Output: true

set.delete(2);
console.log(set.size); // Output: 2

set.forEach((value) => {
    console.log(value);
});
console.log(set);
console.log();

const map = new Map();

map.set('name', 'John');
map.set('age', 30);

console.log(map.get('name')); // Output: John
console.log(map.has('age')); // Output: true

map.delete('age');
console.log(map.size); // Output: 1

map.set('address', 'Calabar');
console.log(map.size); // Output: 2

map.forEach((value, key) => {
      console.log(`${key}: ${value}`);
});
console.log(map);
console.log();


