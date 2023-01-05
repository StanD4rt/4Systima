import 'cypress-xpath'

Cypress.on('uncaught:exception',(err, runnable) => {
    if(err.message.includes("Cannot read property")){
        return false
    }
    if(err.message.includes("Cannot read properties")){
        return false
    }
})