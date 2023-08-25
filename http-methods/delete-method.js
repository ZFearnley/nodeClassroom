const express = require('express')
const app = express()

app.delete('/user/:id' , (req,res) => {

    const userId = req.params.id

    res.send('user information ${userId} deleted')
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})