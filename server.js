// ===[ Import Dependencies ]========================================================
const app = require('express')()
const expressGQL = require('express-graphql')
const mySchema = require('')




// ===[ Routes ]====================================================================
app.use('/pg', expressGQL({
    schema: mySchema,
    graphiql: true
}))




// ===[ Server Listener ]===========================================================
app.listen(4000, () => {
    console.log("Servery Listeing on port 4000 ...")
})