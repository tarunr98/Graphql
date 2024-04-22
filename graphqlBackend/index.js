const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index")
const cors = require('cors');

app.use('/graphql', cors(), graphqlHTTP({
    schema,
    graphql: true,
}))

app.listen(PORT, ()=>{
    console.log("Server running");
})