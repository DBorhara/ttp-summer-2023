//SPREAD
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr2a = [arr1, 4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr2a);

//REST
function checkRest(...rest) {
  //   console.log("a", a);
  //   console.log("b", b);
  rest.forEach((element) => console.log(element));
}

console.log(checkRest(1, 2, 3, 4, 5, 6, 100, 300));
