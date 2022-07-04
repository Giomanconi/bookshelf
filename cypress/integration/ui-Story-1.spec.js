///<reference types="cypress" />
Cypress.config('baseUrl', 'http://localhost:3000')
const singleBookJSON = require('../fixtures/books/singleBook.json')
const reqfieldsOnly = require('../fixtures/books/requiredFieldsOnly.json')

describe('Adding Books', () => {
  beforeEach(() => {

    cy.visit('/add-book')

  })

  it('Adding a book - All fields filled', () => {

    //Intercept submit to get status code or any other needed 
    cy.intercept('POST', '/books').as('postResponse')

    //Test Data
    cy.fixture('/books/singleBook.json').then((e) => {
      cy.get('[id="Title *"]').type(e.title)//Title Field
      cy.get('[id="Author *"]').type(e.author)//Author Field
      cy.get('div[id="demo-simple-select"]').first().click()//Format field click
      cy.get('[data-value="Paperback"]').click()//Select Format
      cy.get('div[id="demo-simple-select"]').eq(1).click()//Language field click
      cy.get('[data-value="English"]').click()//Select language
      cy.get('[id="Publication Year"]').type(e.pubYear)//Publication Year field
      cy.get('[id="outlined-multiline-static"]').type(e.description)//Description Year field
      cy.get('[for="rating-' + e.rating + '"]').click()//Rating fields

      //Submit book
      cy.get('#root > div > main > div > div.MuiBox-root.MuiBox-root-24 > button:nth-child(1)').click()


      //Assertions
      cy.wait('@postResponse').then(i => {
        cy.wrap(i.response.statusCode).should('eq', 201);

        expect(i.response.body).has.property('title', e.title)
        expect(i.response.body).has.property('author', e.author)
        expect(i.response.body).has.property('format', e.format)
        expect(i.response.body).has.property('language', e.language)
        expect(i.response.body).has.property('pubYear', e.pubYear)
        expect(i.response.body).has.property('description', e.description)
        expect(i.response.body).has.property('rating', e.rating)
      })
    })
  })


  it('Adding a book - Required field only', () => {

    cy.intercept('POST', '/books').as('postResponse')

    cy.fixture('/books/requiredFieldsOnly.json').then((e) => {

      cy.get('[id="Title *"]').type(e.title)//Title Field
      cy.get('[id="Author *"]').type(e.author)//Author Field

      //Submit book
      cy.get('#root > div > main > div > div.MuiBox-root.MuiBox-root-24 > button:nth-child(1)').click()


      //Assertions
      cy.wait('@postResponse').then(i => {
        cy.wrap(i.response.statusCode).should('eq', 201);

        expect(i.response.body).has.property('title', e.title)
        expect(i.response.body).has.property('author', e.author)

      })
    })
  })
})
