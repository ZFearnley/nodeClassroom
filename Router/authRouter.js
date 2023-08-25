//import the express module
import express from 'express';

//create a new instance of an express router
const router = express.Router();

    const isUser = (req, res, next) => {
        if(req.query.user === 'true'){
            next();
        } else {
            res.send("Invalid details")
        }
    };

    router.get('/user', isUser, (req, res) => {
        res.send('User logged in successfully');
    });

    const app = express();
    app.use('/home', router);

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));