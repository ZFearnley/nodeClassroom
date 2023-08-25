import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

    app.use((req, res, next) => {
        console.log(`Received request from ${req.body}`)
    });

    app.get('/', (req, res) => {
        const htmlPage = path.join(__dirname, 'index.html')
    });

    fs.readFileSync(htmlPage, (error, htmlPage) => {
        if (error){
            console.log(error);
            res.status(500).send("Internal Server Error")
            return
        }
        res.send(htmlPage)
    });

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));