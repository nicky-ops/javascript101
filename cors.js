// Simple Reguest
const fetchPromise = fetch('https://bar.other');

fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });


// Preflighted requests
const fetchPromise = fetch('https://bar.other/doc', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'text/xml',
        'X-PINGOTHER': 'pingpong',
    },
    body: '<person><name>Arun</name></person>'
});

fetchPromise.then((response) => {
    console.log(response.status);
});


// Requests with credentials
const url = 'https://bar.other/resources/credentialed-content';

const request = new Request(url, { credentials: 'include'
});

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));


// Preflight requests and credentials
/* CORS-preflight requests must never include credentials. The response to a preflight request must specify Acess-Control-Allow-Credentials: true to indicate that the actual request can be made with credentials */
