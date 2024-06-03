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

method(callbackFn, thisArg)