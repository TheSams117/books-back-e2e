const expect = require('chai').expect;
const axios = require('axios');
const faker = require('faker').random;

const book = {
    name: `${faker.words(2)}`,
    author: "Sergio"
};

const badBook = {}

let response;
describe('When the user wants to create a book', () => {
    before(async () => {
        response = await axios.post('https://books-icesi-back.herokuapp.com/books', book);
    });

    it('should have a OK status code', () => {
        expect(response.status).eql(200);
    });

    it('should return the created book', () => {
        expect(response.data).not.equal(null);
        const createdBook = response.data;
        expect(createdBook.name).eql(book.name);
        expect(createdBook.author).eql(book.author);
    });

    it('should return a json as response', () => {
        const headers = response.headers;
        expect(headers["content-type"]).to.contain("application/json");
    });
});


// describe('When the user doesnt send book on the body', () => {
    
//     before(async () => {
//         response = await axios.post('https://books-icesi-back.herokuapp.com/books',badBook);
//     });

//     it('should have a Unsupported Media Type status code', () => {
//         expect(response.status).eql(400);
//     });
// });