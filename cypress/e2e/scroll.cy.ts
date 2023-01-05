import { onQuotes } from "../support/Page object/quotes.cy";
 
describe("scroll test", ()=>
{
    it("scroll test", () =>
    {
        cy.visit('http://quotes.toscrape.com/scroll');
        onQuotes.isScrollable('a mind needs books');  
    }) 
})