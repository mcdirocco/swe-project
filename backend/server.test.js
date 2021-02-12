import request from 'request';

/* Globals */
const uri = 'http://localhost:3001/';

/*
  Describe blocks organize your unit tests into distinct categories of functionality.

  They can be nested.
 */
describe('UF Directory Server Unit Tests', function() {

    /*
      This before hook loads the JSON data to the listings variable, so that we can compare
      the response to 'http://localhost:8080/listings' to the data we expect to recieve.
     */
    before(function(done) {
        console.log('Test');
        done();
    });

    describe('Server responds to requests', function() {
        it('Should succeed', async () => {
            await request.get('http://httpbin.org/get?answer=42');
        });
        it('Should fail', async () => {
            await request.get('borkeduri');
        });
    });


    // In these tests, we will be checking more specific content using object and primitive comparisons that have specific values.
    describe('Server provides listing data as JSON on proper request', function() {

        it('Poop', (done) => {
            done();
        });

        // it('responds correctly to a GET request to "/listings"', async function(done) {
        //     let res = await fetch(uri + 'users', {method: 'GET'});
        //     let json = res.json().then(() => done()).catch(() => done());
        // });

        // For the last test, let's use make primitive value comparisons
        it('responds with a 404 error to other GET requests', function(done) {
            // request.get('http://localhost:8080/pizza', function(error, response, body) {
            //     // First, assert that the status code is what it's supposed to be (exactly 404) if the listing were missing.
            //
            //
            //     // For the last assertion, check that the string output is the same message server.js outputs when a listing is missing:
            //     // Finally, call "done();" to finish!
            //
            //
            // });
            done();
        });
    });

});