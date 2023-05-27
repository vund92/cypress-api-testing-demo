import { DEFAULT } from "../utils/Method";

describe('Handling async request in Cypress', () => {
    it('Should be able to wait until a request resolved', /*async*/ () => {
        // let response = await cy.request({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'GET'
        // })

        // expect(response.status).to.eq(200)
        // expect(response.body.length).to.eq(100)

        // let deleteRes = await new Cypress.Promise((resolve,reject) =>

        //     cy.request({
        //         method: DEFAULT.delete,
        //         url: 'https://jsonplaceholder.typicode.com/posts/1'
        //     }).then(val => resolve(val))
        // )

        // cy.log(JSON.stringify(deleteRes))

        //CRUD
        //let url = 'https://jsonplaceholder.typicode.com/posts'

        // let requestObject = {
        //     method: 'POST',
        //     url: url,
        //     headers: header,
        //     body: createdPostBody
        // }

        let url = Cypress.env("baseURL");
        
        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            id: 101
        }

        let updatedPostBody = {
            title: 'foo00000000000000000',
            body: 'bar',
            id: 101
        }

        cy.createPost(createdPostBody).then(res =>{
            cy.getPost((Number(res.body.id) - 1).toString())
                .then(res => {
                    cy.request({
                        method: "PUT",
                        url: url + "/" + res.body.id,
                        headers: header,
                        body: updatedPostBody
                    }).then(res => {
                        cy.request({
                            method: "DELETE",
                            url: url + "/" + res.body.id,
                    }).then(res => {
                        cy.log(JSON.stringify(res))
                    })
                })
            })
        })
    })
});
            
