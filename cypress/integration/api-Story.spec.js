///<reference types="cypress" />
import apiTestBook from '../fixtures/books/apiTestingBook.json'
Cypress.config('baseUrl', 'http://localhost:3001/')


describe('GET ', () => {

    beforeEach(() => {
        cy.cleanUp('111')
    })

    it('Get all books', () => {
        cy.request('GET', '/books/')
            .then(res => {
                expect(res.status).to.eq(200);
            })
    })
})


describe('POST', () => {

    beforeEach(() => {

        cy.cleanUp('111')

    })

    it('Insert a Book', () => {

        cy.fixture('/books/apiTestingBook.json').then((e) => {

            cy.request('POST', '/books', e)
                .then(res => {

                    expect(res.status).to.eq(201);

                    expect(res.body).has.property('title', e.title)
                    expect(res.body).has.property('author', e.author)
                    expect(res.body).has.property('format', e.format)
                    expect(res.body).has.property('language', e.language)
                    expect(res.body).has.property('pubYear', e.pubYear)
                    expect(res.body).has.property('description', e.description)
                    expect(res.body).has.property('rating', e.rating)
                })
        })
    })
})


describe('PATCH ', () => {

    beforeEach(() => {
        cy.cleanUp('111')
        cy.request('POST', '/books', apiTestBook)
    })

    it('Update a Book information', () => {

        cy.fixture('/books/patchApiTest.json').then((e) => {

            cy.request('PATCH', '/books/' + e.id, e)
                .then(res => {

                    expect(res.status).to.eq(200);

                    expect(res.body).has.property('title', e.title)
                    expect(res.body).has.property('author', e.author)
                    expect(res.body).has.property('format', e.format)
                    expect(res.body).has.property('language', e.language)
                    expect(res.body).has.property('pubYear', e.pubYear)
                    expect(res.body).has.property('description', e.description)
                    expect(res.body).has.property('rating', e.rating)
                })
        })
    })
})

describe('DELETE ', () => {

    beforeEach(() => {
        cy.cleanUp('111')

        cy.request('POST', '/books', apiTestBook)
    })

    it('Delete a Book', () => {

        cy.request('DELETE', '/books/111')
            .then(res => { expect(res.status).to.eq(200) })
    })
})

