export class quotes {
    navButtonClick(name: string){
        cy.contains(name).click();
    };

    isQuoteExists(text:string){
        cy.contains(text).should('be.visible');
    }

    isScrollable(quoteText:string){
        cy.get('.quote').last().scrollIntoView().nextUntil(`span[innerText='${quoteText}']`);        
    }
    
}
export const onQuotes = new quotes();