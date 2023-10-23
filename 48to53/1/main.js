let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start ; i <= 100 ; i+=start) {
    if (i == exclude) {
        continue;
    }
    console.log(i)
}