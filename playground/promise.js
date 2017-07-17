var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Arguments must be number");
            }
        }, 1500)
    });
};

asyncAdd(5, 1).then((results) => {
    console.log('Results: ', results);
    return asyncAdd(results, 4);
}).then((res) => {
    console.log('Should be 10', res);
}).catch((error)=>{
    console.log(error);
});
/* var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey its worked!');
        reject('Unable to fullfill the pormise');
    }, 2000);

});

somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
}) */