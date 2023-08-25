//import the express module
import express from 'express';

//create a new instance of an express router
const router = express.Router();

    router.use(('/user', express.json()))

    router.post('/user', (req, res, next) => {
        if(!req.body.name || !req.body.email || !req.body.password){
            return res.status(400).send('Name, email AND password are all required');
        } else {
            next();
            (req, res) => {
                res.send('User created successfully');
            }
        }
    });

    const app = express();

    app.use('/home', router);

//Listen for the middleware
app.listen(3000, () => console.log('Server running on port 3000'));