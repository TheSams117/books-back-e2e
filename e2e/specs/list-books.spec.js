
const expect = require('chai').expect;
const axios = require('axios');

let response;
describe('When the user wants to list the books', () => {
    before(async () => {
        response = await axios.get('https://books-icesi-back.herokuapp.com/books');
    });
    it('should have an OK status code', () => {
        expect(response.status).eql(200);
    });

    it("should return books with id, name and author", () => {
        expect(response.data.length).to.be.greaterThan(0);
        const book = response.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");
    });
});