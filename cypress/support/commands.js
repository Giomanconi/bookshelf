
Cypress.Commands.add('cleanUp', (id) => {

    cy.request({
        method: 'GET',
        url: '/books/' + id,
        failOnStatusCode: false
    })
        .then(res => {
            if (res.status == 200) {
                cy.request('DELETE', '/books/' + id)
            };
        })
})