let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = arr1.concat(arr2).sort()

allArrs = allArrs.slice( arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy