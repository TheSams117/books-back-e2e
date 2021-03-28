const expect = require('chai').expect;
const axios = require('axios');
const faker = require('faker').random;

let createdBook;
let updatedBook;
let response;

describe('Given a created book', () => {
    before(async () => {
        const book = {
            name: `${faker.words(2)}`,
            author:"Sergio"
        };

        createdBook = (await axios.post('https://books-icesi-back.herokuapp.com/books', book)).data;

    });

    describe('When the user wants to update the book', () => {
        before(async () => {
            updatedBook = {
                name: `${faker.words(2)}`,
                author:"Andres"
            };

            response = await axios.put(`https://books-icesi-back.herokuapp.com/books/${createdBook.id}`, updatedBook)
        });

        it('Then should have an OK status code', () => {
            expect(response.status).eql(200);
        });

        it('Then should return a book with the name and author not equals', async () => {
            expect(response.data.name).not.eql(createdBook.name);
            expect(response.data.author).not.eql(createdBook.author);
        });
    });
});


describe('Given a created book', () => {
    before(async () => {
        const book = {
            name: `${faker.words(2)}`,
            author:"Sergio"
        };

        createdBook = (await axios.post('https://books-icesi-back.herokuapp.com/books', book)).data;

    });

    describe('When the user wants to update the book', () => {
        before(async () => {
            updatedBook = {
                name: `${faker.words(2)}`,
                author:"Andres"
            };

            response = await axios.put(`https://books-icesi-back.herokuapp.com/books/${createdBook.id}`, updatedBook)
        });

        it('Then should have an OK status code', () => {
            expect(response.status).eql(200);
        });

        it('Then should return a book with the name and author not equals', async () => {
            expect(response.data.name).not.eql(createdBook.name);
            expect(response.data.author).not.eql(createdBook.author);
        });
    });
});