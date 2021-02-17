require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// Middleware: allows us to kuse res.json
app.use(express.json())


//allows access from all origins
app.use(cors())
// bodyparser middleware
app.use(express.urlencoded({extended: false}))



app.listen(process.env.PORT || 8000,  ()=>{
    console.log('Listening on PORT 8000')
})