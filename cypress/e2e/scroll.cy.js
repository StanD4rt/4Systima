"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quotes_cy_1 = require("../support/Page object/quotes.cy");
describe("scroll test", function () {
    it("scroll test", function () {
        cy.visit('http://quotes.toscrape.com/scroll');
        quotes_cy_1.onQuotes.isScrollable('a mind needs books');
    });
});
