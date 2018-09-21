const request = require('request');
const expect = require('chai').expect;
const expectedStatusCode = 201;
const expecetedUserId = 1;
let data = { "title": "foo", "body": "bar", "userId": 1 };
let options = {
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: data,
    json: true
}
request.post(options, function (error, response, body) {
    if (error) {
        console.log('Error: ' + error);
    } else {
        let actualStatusCode = response.statusCode;
        let actualUserId = JSON.parse(JSON.stringify(body)).userId;
        console.log('Status code of the response is: ' + actualStatusCode);
        console.log('User id of the response is: ' + actualUserId);
        expect(actualStatusCode).to.equal(expectedStatusCode, 'Error: Expected status code is '
            + expectedStatusCode + ' instead found ' + actualStatusCode);
        expect(actualUserId).to.equal(expecetedUserId, 'Error: Expected status code is '
            + expecetedUserId + ' instead found ' + actualUserId);
    }
});