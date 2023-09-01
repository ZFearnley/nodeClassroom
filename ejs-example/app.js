const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.set('view', path.join(_dirname))
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.render('pages/home')
})

app.get('/links', (req,res) => {

    const items = [
        {name: 'web601', url: 'https://ecampus.nmit.ac.nz/moodle/course/view.php?id=14156'},
        {name: 'SFIA', url: 'https://sfia-online.org/en'}
    ]

    res.render('pages/links', {
        items
    })
})

app.get('/list', (req,res) => {
    const skills = ['web development', 'web design', 'SDLC']

    res.render('pages/list', {
        list: skills
    })
})

app.get('/courses', (req,res) => {
    const course = [
        {name: 'WEB601', descrp: 'Web development API'},
        {name: 'SDV502', descrp: ' Software testing'}
    ]

    res.render('pages/courses', {
        courses: course
    })
})

function messages(req,res,next) {
    let message
    res.locals.message = message
    next()
}

app.get('/form', messages, (req,res) => {
    res.render('/pages/form')
})

app.post('/form', (req,res) => {
    const message = req.body
    res.locals.message = message
    res.render('pages/form')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})