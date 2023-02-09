require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/db/dbConnect')

const app = express();
// Database connection
dbConnect();

// Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})