let start = 10;
let end = 0;
let stop = 3;

// Output
for (let i = start ; i>= stop ; i-- ) {
    if (i < start ) {
        console.log(`${end}${i}`); 
    }
    else console.log(+i)
}