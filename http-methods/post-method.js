const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.post('/upload', (req,res) => {
    const userInfo = req.body

    res.send('Files ${UserInfo} uploaded!')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

