import { onQuotes } from "../support/Page object/quotes.cy";
 
describe("delayed elements test", ()=>
{
    it("delayed elements test", () =>
    {
        cy.visit('http://quotes.toscrape.com/js-delayed/');
        onQuotes.isQuoteExists('A woman is like a tea bag');
        onQuotes.navButtonClick('Next');   
        onQuotes.isQuoteExists('Life is what happens');
        onQuotes.navButtonClick('Next');   
        onQuotes.isQuoteExists('One good thing about music');
        onQuotes.navButtonClick('Previous');  
        onQuotes.isQuoteExists('Life is what happens');
    }) 
})