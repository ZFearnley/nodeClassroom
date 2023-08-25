const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Welcome to the home page')
})

app.listen(3000, () => {
    console('Server running on port 3000')
})