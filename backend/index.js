const express = require('express');
const cors = require('cors');
require('dotenv').config()
const connectDB = require('./config/db.js');


const app = express();
app.use(cors())

const PORT = 8081 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connected to DB")
        console.log("Server is running")
    })
})
