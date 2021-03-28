const expect = require('chai').expect;
const axios = require('axios');
const faker = require('faker').random;

let createdBook;
let response;
describe('Given a created book', () => {
    before(async () => {
        const book = {
            name: `${faker.words(2)}`,
            author:"Sergio"
        };

        createdBook = (await axios.post('https://books-icesi-back.herokuapp.com/books', book)).data;

    });

    describe('When the user wants to delete the book', () => {
        before(async () => {
            response = await axios.delete(`https://books-icesi-back.herokuapp.com/books/${createdBook.id}`)
        });

        it('Then should have an OK status code', () => {
            expect(response.status).eql(200);
        });
    });
});