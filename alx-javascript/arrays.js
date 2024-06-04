const fruits = []
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

// when setting a property on an array, when the property is a valid index and that index is outside the current bounds of the array the engine will update the array's length property accordingly.
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

// increasing the length extends the array by adding empty slots without creating any new elements - not even undefined.
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits));
console.log(fruits.length); //10
console.log(fruits[8]); //undefined

// decreasing the length does remove elements.
fruits.length = 2;
console.log(Objects.keys(fruits)); // ['0', '1']
console.log(fruits.length);

// array methods
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});


colors.reverse(); // ['purple', empty x 2, 'blue', 'yellow', 'red']

//methods that create new arrays:
// concat(), filter(), flat(), flatMap(), map(), slice() and splice()

// changing mutating method into a non-mutating alternative
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr

method(callbackFn, thisArg) // callbackFn takes three arguments: element, index, array

// iterative methods: every(), filter(), find(), findIndex(), findLast(), findLastIndex(), flatMap(), forEach(), map(), some()
function method(callbackFn, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            const result = callbackFn.call(thisArg, this[i], i, this)
        }
    }
}

// Check if an array contains a certain item
const fruits = ["Apple", "Banana"];
fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; //false

// append an item to an array
const newLength = fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]
console.log(newLength); // 3

// remove the last item from an array
removedItem = fruits.pop()
console.log(fruits); // ["Apple", "Banana"]
console.log(removedItem); // "Orange"

// remove multiple items from the end of an array
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits); // ["Apple"]
console.log(removedItems); // ["Banana"]


// copy an array
const fruitsCopy = [...fruits];
const fruitsCopy1 = Array.from(fruits);
const fruitsCopy2 = fruits.slice();

// typed arrays
function toBinary(x, 
    { type = "Float64", littleEndian = false, seperator = " ", radix = 16 } = {},
) {
    const bytesNeeded = 
    globalThis[`${type}Array`].BYTES_PER_ELEMENT;
    const dv = new DataView(new ArrayBuffer(bytesNeeded));
    dv[`set${type}`](0, x, littleEndian);
    const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
    dv
    .getUint8(i)
    .toString(radix)
    .padStart(8 / Math.log2(radix), "0"),
    );
    return bytes.join(seperator);
}

console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true})); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, {type: "Int8", radix: 2 })); // 00010100

// set
// set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.
const mySet1 = new Set();
mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, "some text" }
const o = { a: 1, b: 2 };
mySet1.add(o);


// map
// map objects are collections of key-value pairs where both the keys and values may be objects or primitive values.
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
myMap.set('a', 4);

console.log(myMap.get('a')); // 4

// weakmap
// weakmap objects are collections of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.
const wm1 = new WeakMap();
const key1 = {};
wm1.set(key1, 37);
console.log(wm1.get(key1)); // 37
