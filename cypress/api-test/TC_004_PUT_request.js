describe('Test PUT method request', () => {
    it('Should be able to send a request with PUT method', () => {
        let requestBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            header: {'Content-type': 'application/json; charset=UTF-8'},
            body: requestBody
        }).then(res => {
            let {status} = res
            let resBody = res.body
            let {userId, id, title, body} = resBody
            expect(status).to.eq(200, 'Verifying response headers')
            expect(id).to.eq(requestBody.userId,'Verifying userId is not correct')
            expect(id).to.eq(requestBody.id,'Verifying id is not correct')
            expect(title).to.eq(requestBody.title,'Verifying title is not correct')
            expect(body).to.eq(requestBody.body, 'Verifying body is not correct')
            //cy.log(JSON.stringify(res));
        })
    });
});