let start = 0;
let swappedName = "elZerO";

// Output
let ss = []
for (let i = start; i<swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase() ) {
        ss.push(swappedName[i].toUpperCase())
    }else {
        ss.push(swappedName[i].toLowerCase())
    }
}
console.log(ss.join(""));
