//const http = require('http');
const express = require("express")
const app = express()

//this will sorve static files from public folder
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')


const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)

