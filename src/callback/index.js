function sum(a, b) {
    return a + b;
}


function calc(a, b, callback) {
    return callback(a, b);
}
console.log(calc(2, 2, sum));

setTimeout(  () => {
 console.log("hola java");
}, 2000);


function grettin (name) {
    console.log(`hola ${name}`);
}

setTimeout(grettin, 2000, "juan");