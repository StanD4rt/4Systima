
describe('API Smoke test', () => {
  it('quotes appearance', () => {  
    cy.request('http://quotes.toscrape.com/api/quotes').then(response => {
      expect(response.status).equal(200);
      expect(response.body.quotes.length).equal(10);        
    })
  }) 
})