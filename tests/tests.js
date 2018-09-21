const expect = require('chai').expect;
const request = require('request');
let data = { "title": "foo", "body": "bar", "userId": 1 };
let options = {
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: data,
    json: true
}

describe('Unit tests for implemention of POST request', function() {
    // Check for status code
    it('Check for status code', function() {
        request.post(options, function(error, response, body) {
            expect(response.statusCode).to.equal(201, "Error: Response code ! equals 200");
        });
    });
    // Check for userId
    it('Check for userId', function() {
        request.post(options, function(error, response, body) {
            expect(JSON.parse(response.body).userId).to.equal(1, "Error: Userid from response body ! equals 1");
        });
    });
});