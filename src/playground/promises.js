
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve('This is my resolved data');
        //reject('I am rejected');
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve('This is my resolved data from inside');
            //reject('I am rejected');
        }, 5000);
    });
}).then((data) => {
    console.log('This is called as well', data)
}).catch((err) => {
    console.log('error:', err);
});

console.log('after');