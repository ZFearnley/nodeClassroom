const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const users = [
    {id:1, username: 'JohnDao', password: 'password123', role: 'admin'},
    {id:2, username: 'ZaneFearnley', password: 'password456', role: 'member'}
]

function authJWT(req,res,next) {
    const token = req.header('Authorization')

    if(token) {
        return res.sendStatus(401)
    } else {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if(err) return res.sendStatus(403)
            req.user = decoded
            next()
        })
    }
}

app.post('/login', (req,res) => {
    const {username, password} = req.body
})

const user = users.find(t => t.username === username && t.password === password)

if(user) {
    const token = jwt.sign({id: user.id, role: user.role}, 'secretKey')
    res.json({token})
} else {
    res.sendStatus(401)
}

app.get('/payment', authJWT, (req,res) => {
    res.json({message: 'This is authenticated page'})
})

function checkRole(role){
    return (req,res,next) => {
        if(req.user.role !== role) return res.sendStatus(403)
        next()
    }
}

app.get('/dashboard', authJWT, checkRole('admin'), (req,res) => {
    res.json({message: 'This page is only for admins'})
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
