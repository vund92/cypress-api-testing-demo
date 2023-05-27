describe('Test POST request', () => {
    it('Should be able to send POST request and verify the response', () => {
        
        let url = 'https://jsonplaceholder.typicode.com/posts'
        
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let requestBody = {
            title: 'foo',
            body: 'bar',
            id: 101
        }

        let requestObject = {
            method: 'POST',
            url: url,
            headers: header,
            body: requestBody
        }

        cy.request(requestObject).then(res => {
            let {status, body} = res
            cy.log(JSON.stringify(res))
            expect(status).to.eq(201, 'Status is not 201')
            let {id, title} = body
            let reponseBody = body.body

            //expect(userId).to.eq(reponseBody.userId, 'userId is not correct') 
            expect(id).to.eq(requestBody.id, 'id is not correct') 
            expect(title).to.eq(requestBody.title, 'userId is not correct') 
            expect(reponseBody).to.eq(requestBody.body, 'responseBody is not correct') 
        })
    })
})

