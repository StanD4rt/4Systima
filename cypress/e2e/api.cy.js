describe('API Smoke test', function () {
    it('quotes appearance', function () {
        cy.request('http://quotes.toscrape.com/api/quotes').then(function (response) {
            expect(response.status).equal(200);
            expect(response.body.quotes.length).equal(10);
        });
    });
});
