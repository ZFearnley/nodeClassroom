//import the express module
import express from 'express';

//Create a new instance of an express router
const router = express.Router();

    router.use((req, res, next) => {
        req.requestTime = Date.now();
        next();
    });

    router.get('/time', (req, res) => {
        const respondTime = Date.now() - req.requestTime;
        res.send(`Response time ${respondTime}ms`);
    });

    const app = express();

    app.use('/homepage', router);

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));