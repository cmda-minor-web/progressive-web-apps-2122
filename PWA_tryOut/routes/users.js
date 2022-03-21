const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    console.log("req query is: ", req.query.name)
    res.send('User List')

})

router.get('/new', (req, res) => {
    res.render("users/new")
    
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({firstname: req.body.firstname})
        res.redirect(`/users/${users.length - 1}`)
    } else{
        console.log("error")
        res.render("users/new", {firstname: req.body.firstname})
    }
    res.send('Create User')
    console.log(req.body.firstname)
})

router
.route("/:id")
.get((req, res) => {
    req.params.id
    console.log(req.user)
    res.send(`Get User with id ${req.params.id}`)
})
.put((req, res) => {
    req.params.id
    res.send(`Update User with id ${req.params.id}`)
})
.delete((req, res) => {
    req.params.id
    res.send(`Delete User with id ${req.params.id}`)
})

const users = [
    {name: "bas"},
    {name: "Jody"},
    {name: "Jollie"}
]

//Middleware
//Middleware is code that runs between the starting and ending of the request
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(id)
    next()
})

module.exports =  router