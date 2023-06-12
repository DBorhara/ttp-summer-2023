# JS Assignment

- **Due** June 14th, 2023 by 10:00:00 AM
- **Points** 20
- **Submitting** Submit via GitHub Gist

## Goal

To improve your understanding of JavaScript syntax, functions, and higher-order functions, and to better understand JavaScript and Array methods.

## Assignment

The following (12) are some of the most popular and used methods in functional languages:

[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[Some (Any)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
[Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
[Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
[Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
[Push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
[Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

For this assignment, you will recreate these methods using JavaScript functions. Make sure to carefully understand what each method is designed to do, and DO NOT use any of the respective native JS methods to implement your solutions. Also, keep in mind that these methods do not (except for push()) mutate the input array. **We highly suggest utilizing Mozilla Developer Network (MDN) Web Docs to understand how each method works and what arguments they take. Each doc entry is linked above. Also look into Array.prototype.pop(), Array.prototype.shift(), and other methods for your own enrichment.**

### forEach()

Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and executes any callback function (provided by you) on each of those elements.

```
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number); // 1 2 3 4 5
});
```

### map()

Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

### filter()

Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) { return number % 2 === 0; });

console.log(evenNumbers); // [2, 4]
```

### some() (aka any())

Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // true
```

### every()

Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
let numbers = [2, 4, 6, 8, 10];
let allNumbersEven = numbers.every(function(num) {
  return num % 2 === 0;
});
console.log(allNumbersEven); // true
```

### reduce()

Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

```
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum); // 15
```

### includes()

Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.

```
const fruits = ['apple', 'banana', 'orange', 'grape'];
const hasBanana = fruits.includes('banana');

console.log(hasBanana); // true
```

### indexOf()

Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

```
const fruits = ['apple', 'banana', 'orange', 'grape'];

const indexOrange = fruits.indexOf('orange');
console.log(indexOrange); // 2

const indexPear = fruits.indexOf('pear');
console.log(indexPear); // -1
```

### push()

Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.

```
let fruits = ['apple', 'banana'];
let length = fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(length); // 3
```

### lastIndexOf()

Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myUnshift” (typo) that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

```
const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];

const lastIndexDog = animals.lastIndexOf('dog');
console.log(lastIndexDog); // 3

const lastIndexCow = animals.lastIndexOf('cow');
console.log(lastIndexCow); // -1
```

### Object.keys()

Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop.

```
const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

const keys = Object.keys(student);
console.log(keys); // ['firstname', 'lastname', 'age', 'gender']
```

### Object.values()

Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object. Modify the Object class, appending a static method to the Object class. Leverage the “for...in” loop.

```
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

const values = Object.values(car);
console.log(values); // ["Toyota", "Corolla", 2020]
```

## Miscellaneous Problems (4)

[From Chapter 4 of Eloquent JavaScript](https://eloquentjavascript.net/04_data.html)

- [ ] Sum of a Range
- [ ] Reversing an Array
- [ ] A List
- [ ] Deep Comparison

## Miscellaneous Problems (1)

- [ ] Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

```
function moveZeros (nums) {
 // Code logic goes here
}
```

Example:

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note:**

You must do this in-place without making a copy of the array.
