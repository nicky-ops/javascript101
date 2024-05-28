// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// A promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.

function successCallback(result) {
    console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
    console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// The same function can be re-written to return promises
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// Chaining
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log(`Got the final result: ${finalResult}`);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

const promise = doSomething
const promise2 = promise.then(successCallback, failureCallback)

// Using catch and arrow functions

doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);


doSomething()
    .then(url => fetch(url))
    .then(res => res.json())
    .then(data => {
        listOfIngredients.push(data);
    })
    .then(() => {
        console.log(listOfIngredients);
    });


// Using asyn/await
async function logIngredients() {
    const url = await doSomething();
    const res = await fetch(url);
    const data = await res.json();
    listOfIngredients.push(data);
    console.log(listOfIngredients);
}

async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
        failureCallback(error)
    }
}

// Chaining after a catch
doSomething()
    .then(() => {
        throw new Error('Something failed');
        console.log('Do this');
    })
    .catch(() => {
        console.error("do that");
    })
    .then(() => {
        console.log("Do this, no matter what happened before");
    });

    async function main() {
        try {
            await doSomething();
            throw new Error("Something failed");
            console.log("Do this");
        } catch (e) {
            console.error("Do that")
        }
        console.log("Do this, no matter what happened before");
    }

// COMPOSITION
// start operations at the same time and wait for them all to finish like this:
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
    // do something with result1, result2, and result3
});

// Promise.allSettled() is another composition tool that ensures all operations are complete before resolving.
Promise.allSettled([func1(), func2(), func3()]).then(results => {
    results.forEach(result => {
        console.log(result.status, result.value);
    });
});


new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
            setTimeout(resolveInner, 1000);
        }),
    );
});


// Chained Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
})

myPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handlerejectedC)
    .catch(handleRejectedAny);

// using arrow functions
myPromise
    .then(value => `${value} and bar`)
    .then((value) => `${value} and bar again`)
    .then((value) => `${value} and again`)
    .then((value) => `${value} and again`)
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.error(err);
    });

    const promiseA = new Promise((resolve, reject) => {
        resolve(777);
    });
    // At this point, "promiseA" is already settled.
    promiseA.then((val) => console.log("asynchronous logging has val:", val));
    console.log("immediate logging");


// Promisifying XMLHttpRequest
function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
             // so check the status
             if (req.status == 200) {
                // Resolve the promise with the response text
                 resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            // Make the request
            req.send();
        });
    }

    // Use it!
    get('story.json').then(function(response) {
        console.log("Success!", response);
    }, function(error) {
        console.error("Failed!", error);
    })

    // Transforming values
var promise1 = new Promise(function(resolve, reject) {
    resolve(1);
});

promise1.then(function(val) {
    console.log(val); 
    return val + 2;
}).then(function(val) {
    console.log(val);
})