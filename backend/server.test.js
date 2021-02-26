import request from 'request';
import assert from "assert";

/* Globals */
const uri = 'http://localhost:3001/';

/*
  Describe blocks organize your unit tests into distinct categories of functionality.

  They can be nested.
 */
describe('SWE Backend Unit Tests', function() {

    /*
      This before hook loads the JSON data to the listings variable, so that we can compare
      the response to 'http://localhost:8080/listings' to the data we expect to recieve.
     */

    describe('Backend can make API calls', function() {

        it('Call to JSON placeholder API', async () => {
            await request.get('https://jsonplaceholder.typicode.com/todos/1');
        });

    });


    // In these tests, we will be checking more specific content using object and primitive comparisons that have specific values.
    describe('Backend is capable of doing math', () => {

        it('Addition: 3 + 2 = 5', () => {
            let number = 3 + 2;
            assert(number === 5);
        });

        it('Multiplication: 5 * 5 = 25', () => {
            let number = 5 * 5;
            assert(number === 25);
        });
    });

});