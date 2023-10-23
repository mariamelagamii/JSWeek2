let index = 10;
let jump = 2;

for (;;) {
let i = index;
    if ( i <= jump ) {
        break
    }
    console.log(i)
    i-=jump;
    index -=jump
}

