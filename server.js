const express = require('express')
var app = express()

const userRoute = require('./routes/userRoute')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.send('This is Backend!')
})

app.listen(5000, () => {
    console.log('Server started on port: 5000')
})