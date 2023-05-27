import { DEFAULT } from "../utils/Method";

describe('Test DELETE method request', () => {
    it('Should be able to send a request with DELETE method', () => {
        cy.request({
            method: DEFAULT.delete,
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).then(res => {
            expect(res.status).to.eq(200, 'Verifying response headers')
            cy.log(res.body);
        })
    });
});