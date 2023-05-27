describe('Test GET request', () => {
    it('Should be able to send GET request and verify the response', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then(reponse => {
            //Destructure
            let {status, body} = reponse
            expect(status).to.equal(200)
            expect(body.length).to.eq(100)

            // Get a random element from array object
            let randomIndex = Math.random() * body.length
            let roundedRandomIndex = Math.floor(randomIndex)
            let randomObject = body[roundedRandomIndex]

            // Verification
            verifyNoEmpty('userId', randomObject.userId)
            verifyNoEmpty('id', randomObject.id)
            verifyNoEmpty('title', randomObject.title)
            verifyNoEmpty('body', randomObject.body)
        })
    })
})

let verifyNoEmpty = (name, data) => {
    if(!data){
        expect(true).to.eq(false, `${name} data is empty`)
    }
}