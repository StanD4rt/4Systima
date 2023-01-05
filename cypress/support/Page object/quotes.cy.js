"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onQuotes = exports.quotes = void 0;
var quotes = /** @class */ (function () {
    function quotes() {
    }
    quotes.prototype.navButtonClick = function (name) {
        cy.contains(name).click();
    };
    ;
    quotes.prototype.isQuoteExists = function (text) {
        cy.contains(text).should('be.visible');
    };
    quotes.prototype.isScrollable = function (quoteText) {
        cy.get('.quote').last().scrollIntoView().nextUntil("span[innerText='".concat(quoteText, "']"));
    };
    return quotes;
}());
exports.quotes = quotes;
exports.onQuotes = new quotes();
