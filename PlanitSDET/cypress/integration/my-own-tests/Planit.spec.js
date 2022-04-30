/// <reference types="cypress" />

describe('Actions', () => {
    it('go to url', () => {
        cy.visit('https://jupiter.cloud.planittesting.com/#/')
        cy.wait(1000)
    })
    
    it('get title', () => {
        cy.title().should('eq', 'Jupiter Toys')
    })

    it('starts shopping', () => {
        cy.get('.btn-large').click()
        cy.wait(1000)
    })

    it('click buy button', () => {
        cy.get('li#product-2>div>p>a').click()
    })

    it('check contact page', () => {
        cy.get('.icon-envelope').click()
        cy.contains('Forename')
        cy.wait(1000)
        cy.get('[name=forename]').type("test", { force: true })
        cy.get('[type=email]').type("test@test.com", { force: true })
        cy.get('[id=message]').type("test", { force: true })
        cy.get('.btn-primary').click()
        cy.get('.alert-success', { timeout: 25000 }).should('be.visible');
        cy.contains('we appreciate your feedback')
    })

    it('go shopping again', () => {
        cy.get('.icon-barcode').click()
        cy.get('li#product-1>div>p>a').click()
        cy.get('li#product-2>div>p>a').click()
        cy.get('li#product-3>div>p>a').click()
        cy.get('li#product-4>div>p>a').click()
        cy.get('li#product-5>div>p>a').click()
        cy.get('li#product-6>div>p>a').click()
        cy.get('li#product-7>div>p>a').click()
        cy.get('li#product-8>div>p>a').click()
        cy.get('.icon-shopping-cart').click()
    })

    it('remove one item', () => {
        cy.get('html>body>div:nth-of-type(2)>div>form>table>tbody>tr:nth-of-type(3)>td:nth-of-type(5)>ng-confirm>a>i').click()
        cy.get('a[class="btn btn-success"]').click()
    })

    it('remove all items', () => {
        cy.contains('Empty Cart').click()
        cy.get('a[class="btn btn-success"]').click()
    })
    
    it('try to log in', () => {
        cy.get('li#nav-login>ng-login>a').click()
        cy.get('input[id=loginUserName]').type('admin')
        cy.get('input[id=loginPassword]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.get('.btn-cancel').click()
    })

    it('Start shopping', () => {
        cy.get('.btn-success').click()
        cy.get('li#product-1>div>p>a').click()
        cy.get('li#product-2>div>p>a').click()
        cy.get('li#product-3>div>p>a').click()
        cy.get('li#product-4>div>p>a').click()
        cy.get('li#product-5>div>p>a').click()
        cy.get('li#product-6>div>p>a').click()
        cy.get('li#product-7>div>p>a').click()
        cy.get('li#product-8>div>p>a').click()
        cy.get('.icon-shopping-cart').click()
        cy.get('html>body>div:nth-of-type(2)>div>form>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>input').clear()
        cy.get('html>body>div:nth-of-type(2)>div>form>table>tbody>tr:nth-of-type(4)>td:nth-of-type(3)>input').type('-1')
        cy.get('html>body>div:nth-of-type(2)>div>form>table>tfoot>tr:nth-of-type(2)>td>a').should('have.class', 'btn-checkout btn btn-success disabled ng-scope')
        cy.get('html>body>div:nth-of-type(2)>div>form>table>tbody>tr:nth-of-type(4)>td:nth-of-type(5)>ng-confirm>a>i').click()
        cy.get('[class="btn btn-success"]').click()
        cy.get('.btn-success').click()
    })

    it('Check out', () => {
        cy.wait(1000)
        cy.contains('Forename')
        cy.get('[name=forename]').type("test", { force: true })
        cy.get('[type=email]').type("test@test.com", { force: true })
        cy.get('[id=address]').type("test", { force: true })
        cy.get('select').select(2, {force: true})
        cy.get('#card').type('1234 5678 9012 3456')
        cy.get('.btn-primary').click()
        cy.get('.alert-success', { timeout: 25000 }).should('be.visible')
        cy.get('.ng-binding', {timeout: 25000}).should('be.visible')
    })

    it('Shopping Again', () => {
        cy.get('.btn-success').click()
    })
       

})