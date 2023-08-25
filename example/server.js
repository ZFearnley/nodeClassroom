const express = require('express')
const app = express()

const teams = [
    {id: 1, name: 'Barcelona', player: 'Messi'},
    {id: 2, name: 'Liverpool', player: 'Jota'},
    {id: 3, name: 'AC Milan', player: 'Leao'}
]

app.get('/teams/:id', (req,res) => {

    const teamId = parseInt(req.params.id, 10)
    const team = team.find(t => t.id === teamId)

    if(team) {
        res.json(team)
    } else {
        res.status(404).send('Team not found')
    }

})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})