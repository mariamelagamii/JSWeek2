let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Method 1 

if (haystack.includes(needle)) {
    console.log("Found");
}

// Method 2 

if (needle === haystack[1]) {
    console.log("Found");
}

// Method 3 

if (needle === haystack.slice(1,2).join()) {

    console.log("Found");
}