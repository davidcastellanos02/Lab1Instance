const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send(res.statusCode)
})

app.listen(1111)