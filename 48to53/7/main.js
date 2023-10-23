let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
for (let i = start; i<mix.length; i++) {
    if (typeof mix[i] === typeof "" || mix[i] === +true) {
        continue;
    }else {
        console.log(mix[i])
    }
}
