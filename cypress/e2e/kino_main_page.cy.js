describe('Main page should have correct elements', () => {
    const selectors = require("../fixtures/selectors.json");
    beforeEach(() => {
      cy.visit('/');
    })
    it('Should show correct numbers of days', () => {    
      cy.get(selectors.days).should('have.length', 7);
    });
  
    it('Main page must have title', () => {
      cy.get('title').should('have.text', 'ИдёмВКино');
    })
  
    it('Should have header banner', () => {
      cy.isVisible(selectors.header);
      cy.get('h1').should('have.text', 'Идёмвкино');
    })
  
    it('Should show correct date today', () => {
      let dateToday = new Date();
      let date = dateToday.getDate();
      let dayOfWeek = dateToday.getDay();
      let arrayDays= ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
      cy.get(selectors.dayWeek).should('have.text', arrayDays[dayOfWeek]);
      cy.get(selectors.dayNumber).should('have.text', date);    
    });
  
  });
  
  describe ('Movie info block', () => {
    const selectors = require("../fixtures/selectors.json");
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Should have class movie', () => {
      cy.isVisible(selectors.movieBlock);
      cy.get('section.movie');
      cy.should('have.length', 3); 
    })
  
  
    
  
    it('Should have description block for movie(1)', () => {
      const movie_desc = require('../fixtures/movie_decr.json');
      movie_desc.forEach(movie_desc => { //селекторы в блоке нельзя выносить в selectors, тк в адресации используется переменная часть в виде пары-соответствия номер - дескриптор из фикстуры movie_desc 
        //в данном случчае идет перебор массива, при добавлении новых фильмов их  описание нужно добавить в movie_desc.json, код теста при увеличении кол-ва фильмов меняться не будет  
        cy.textForSel(`section:nth-child(${movie_desc.number}) > div.movie__info > div.movie__description > .movie__title`, movie_desc.title);
        cy.textForSel(`section:nth-child(${movie_desc.number}) > div.movie__info > div.movie__description > .movie__synopsis`, movie_desc.synopsis);
        cy.textForSel(`section:nth-child(${movie_desc.number}) > div.movie__info > div.movie__description > .movie__data > .movie__data-duration`, movie_desc.duration);
        cy.textForSel(`section:nth-child(${movie_desc.number}) > div.movie__info > div.movie__description > .movie__data > .movie__data-origin`, movie_desc.origin);
      });    
    })
    
  
    it('Should have seanses hall with title and lists of seanses shedule', () => {
      const hall = require('../fixtures/seans_hall_for_all.json');
      hall.forEach( hall =>{ //комментарии аналогичны комментариям пред блока 
        //код теста при увеличении кол-ва залов меняться не будет, не зависимо от количества залов
        cy.textForSel(`section:nth-child(${hall['number-movie']}) > div:nth-child(${hall['number-hall']}) > h3`, hall.name);
        cy.attrInclude(`section:nth-child(${hall['number-movie']}) > div:nth-child(${hall['number-hall']}) > ul > li > a`, "href", hall.href);
        cy.attrInclude(`section:nth-child(${hall['number-movie']}) > div:nth-child(${hall['number-hall']}) > ul > li > a`, "data-seance-id", hall['data-seance-id']);
        cy.attrInclude(`section:nth-child(${hall['number-movie']}) > div:nth-child(${hall['number-hall']}) > ul > li > a`, "data-seance-start", hall['data-seance-start']);
        //cy.textForSel(`section:nth-child(${hall['number-movie']}) > div:nth-child(${hall['number-hall']}) > ul > li > a`, hall.time);
      });
    })
    
  })