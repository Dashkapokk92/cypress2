describe('Booking a ticket', function () {
    const selectors = require("../fixtures/selectors.json");
    const user = require('../fixtures/admin_login.json');

    beforeEach(function () {        
        cy.login(user[0].login,user[0].pass);
    })

    it('Should check seanse in adnim panel', () => {
        cy.isVisible(selectors.checkFilmName); //проверка что фильм есть в сетке расписаний
        cy.textForSel(selectors.checkFilmName,selectors.hallName); //проверка что название зала верно
        cy.textForSel(selectors.checkFilmTime, selectors.filmTime); //проверка что время сеанса в зале верно
    })

    it('Should get ticket to a hall getting from admin panel', function ()  {
        //cy.get('div.conf-step__seances > div:nth-child(2) > div > div > [class = "conf-step__seances-movie-title"]').invoke('text').as('te');
        
        cy.visit("/");
        cy.get(selectors.tomorrowDayClick).click();
        //cy.contain(this.te).click();
        cy.contains(selectors.filmTime).click();  //клик по первому сеансу фильма, коротый мы получали в админке
        cy.get(selectors.freeChain).click();
        cy.contains("Забронировать").click();
        cy.contains('Вы выбрали билеты:').should('be.visible');
        
    })
})