/* 1. Given an object. Write a recursive function that creates a deep copy of it. (Note:
Without additional param). */

function deepCopy(obj) {
  let result = {};
  for (let key in obj) {
    let value = obj[key]
    result[key] = deepCopy(value)
  }
  return result;
}
var a = {
  a: 1,
  b: {
    a: 2
  }
};
var b = deepCopy(a);
a.b.a = 123;
console.log(b.b.a !== 123);



/* 2. Write recursive function range(x,y) to get the integers in range (x,y) where x and
y are also integers. For example if x = 5 and y = 10 output will be [6, 7, 8, 9].
(Note: Without using additional param). */

function range(x, y) {
  if (x === y - 1) {
    return [];
  }
  let arr = range(x, y - 1);
  arr.push(y - 1)
  return arr;
}

console.log(range(5, 10))



/* 3. Given an array which element are integers in range (x, y) not including x and y
where x and y are also integers. Write a function to sort array without any
comparison. */

function f(arr, min, max) {
  let result = [];
  for (; min <= max; min++) {
    if (arr.includes(min)) {
      result.push(min);
    }
  }
  return result;
}

console.log(f([-4, 3, 13, 7, 2], -4, 13))
