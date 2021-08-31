const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("Service alive!")
    console.log(res.statusCode)
})

app.listen(1111)