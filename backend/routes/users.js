import express from "express";
import User from '../models/users.js';
import crypto from 'crypto';

const router = express.Router();

// --- Return List of Current Users ---

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Create New User ---

router.post('/', async (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    req.body['password'] = salt + "$" + hash;
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Get User By Id ---

router.get('/:userId', async (req, res) => {
    try {
        console.log(req.params['userId']);
        const users = await User.findById(req.params['userId']);
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Delete User By Id ---

router.delete('/:userId', async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params['userId'] });
        res.json(deleteUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Update User ---

router.patch('/:userId', async (req, res) => {
    try {
        const updateUser = await User.updateOne({ _id: req.params['userId'] }, { $set: { firstname: req.body['name'] }});
        res.json(updateUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

export default router;