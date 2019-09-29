describe('VRT Screenshot', function() {
    it('Visit and take a creenshot', function() {
        cy.visit('https://jmartipu.github.io/palette.html')

	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pruebaexitosa1@example.com")
      	cy.get('.cajaLogIn').find('input[name="password"]').click().type("PruebaExitosa.01")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
	cy.get('button[id="cuenta"]').click().should('to.exist')
    })
})