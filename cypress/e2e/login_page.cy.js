describe(`Login to admin panel - one happy and one sad path`, () => {
    const selectors = require("../fixtures/selectors.json")
    const user = require('../fixtures/admin_login.json');
    
    user.forEach(user  => {
        it(`Login with to admin panel  - ${user.name} path`, () => {
        cy.login(user.login,user.pass);
        if(user.name == "happy"){
            cy.contains('Администраторррская').should('be.visible');
        }else{
            cy.get(selectors.emailField).then($el => $el[0].checkValidity()).should('be.false')
        }
    });
    })
    
})