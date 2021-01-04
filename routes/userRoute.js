const express = require('express')
var app = express()

const router = express.Router()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mern-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('Mongo DB Connection Successful!')
    }
})

var userModel = mongoose.model('users', {
    name: String,
    username: String,
    password: String
})

router.post('/register', function(req, res) {

    var newUser = userModel({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })

    newUser.save(function(err) {
        if(err) {
            res.send('Something went wrong.')
        } else {
            res.send('User registration successful!')
        }
    })
})

router.post('/login', function(req, res) {
    userModel.find({
        username: req.body.username,
        password: req.body.password
    }, function(err, documents) {
        if(err) {
            res.send('Something went wrong!')
        } else {
            if(documents.length == 0) {
                res.send('Login Failed!')
            } else {
                res.send('Login Successful!')
            }
        }
    })
})

router.post('/getUsers', function(req, res) {
    userModel.find({}, function(err, documents) {
        if(err) {
            res.send('Something went wrong')
        } else {
            res.send(documents)
        }
    })
})

module.exports = router