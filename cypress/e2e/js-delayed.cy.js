"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quotes_cy_1 = require("../support/Page object/quotes.cy");
describe("delayed elements test", function () {
    it("delayed elements test", function () {
        cy.visit('http://quotes.toscrape.com/js-delayed/');
        quotes_cy_1.onQuotes.isQuoteExists('A woman is like a tea bag');
        quotes_cy_1.onQuotes.navButtonClick('Next');
        quotes_cy_1.onQuotes.isQuoteExists('Life is what happens');
        quotes_cy_1.onQuotes.navButtonClick('Next');
        quotes_cy_1.onQuotes.isQuoteExists('One good thing about music');
        quotes_cy_1.onQuotes.navButtonClick('Previous');
        quotes_cy_1.onQuotes.isQuoteExists('Life is what happens');
    });
});
