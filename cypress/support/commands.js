Cypress.Commands.add('check_poster', (num,attr, val) => {
    cy.get(`section:nth-child(${num}) > div.movie__info > div.movie__poster > .movie__poster-image`)
      .should('have.attr', attr) 
      .and('include', val);
});

Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).then(($el) => {
      Cypress.dom.isVisible($el) });
});

Cypress.Commands.add('textForSel', (selector, text) => {
    cy.get(selector).should('have.text', text);
});

Cypress.Commands.add('attrInclude', (selector, attr, include) => {
    cy.get(selector)
    .should('have.attr', attr)
    .and('include', include);
});

Cypress.Commands.add('login', (email, password) => { 
    cy.visit("/admin");      
    cy.get("input[name='email']").type(email);    
    cy.get("input[name='password']").type(password);    
    cy.contains("Авторизоваться").click();    
})
