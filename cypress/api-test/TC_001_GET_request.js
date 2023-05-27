describe('Test GET request', () => {
    it('Should be able to send GET request and verify the response', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(reponse => {
            cy.log(JSON.stringify(reponse.body))
            expect(reponse.status).to.equal(200)
            expect(reponse.body.length).to.eq(100)
        })
    })
})