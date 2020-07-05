// Import dependencies
const express = require('express')
const cors = require('cors')

// Require secondary code files 
require('./db/mongoose')
require('dotenv').config()

// Set up 
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})