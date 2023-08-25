const express = require('express')
const path = require('path')

const app = express()

const staticPath = path.join(_dirname, 'public')
app.use(express.static(staticPath))

app.get('/', (req,res) => {
    res.send('Static files are now served from the public dir')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})