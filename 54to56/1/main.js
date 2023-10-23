let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
let arr1 = [];

while (index < friends.length) {
    if (friends[index][counter] !== "A" && typeof friends[index] === "string" ) {
        arr1.push(friends[index])
    }
    index++
}
console.log(`"${counter + +true} => ${arr1[counter++]}"\n"${counter + +true} => ${arr1[counter]}"`)
