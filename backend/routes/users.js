import express from "express";
import User from '../models/users.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is a get request.');
});

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    }
    catch (err) {
        res.json({message: err});
    }
});

export default router;