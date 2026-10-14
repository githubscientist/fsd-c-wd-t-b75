// promise -> resulting object of eventually completing or failing asynchronous function
let promise = new Promise((resolve, reject) => {
    let x = 5;
    if (x >= 5) {
        // async function completion
        resolve('success');
    } else {
        // failure
        reject();
    }
});

promise
    .then((data) => {
        console.log('promise resolved!');
        console.log(data);
    })
    .catch(() => {
        console.log('promise rejected!');
    });