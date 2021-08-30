const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("Service alive!")
})

app.listen(1111)