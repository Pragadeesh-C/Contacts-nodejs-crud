const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json())
app.use('/api/contacts', require("./routes/contactRoutes"))
app.use(errorHandler)

const port = process.env.PORT;


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})