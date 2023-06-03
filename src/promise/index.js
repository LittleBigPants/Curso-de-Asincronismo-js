const promise = new Promise ((resolve, reject) => {
    resolve("hey todo bien!!")
});


const  cows = 11;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10) {
        resolve(`we have ${cows} cows in the farm`);
    } else {
        reject("there is no cows in the farm")
    }
})


countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally")
})

setTimeout()