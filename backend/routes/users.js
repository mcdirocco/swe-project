import express from "express";
import User from '../models/users.js';
import bcrypt from 'bcrypt';

const user = express.Router();

// --- Return List of Current Users ---

user.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Create New User ---

user.post('/create', async (req, res) => {
    const existingUser = await User.findOne({username: req.body.username});
    if(existingUser !== null)
    {
        res.json({ message: "Username already exists."});
        return;
    }

    let salt;
    let hash;

    try {
        salt = await bcrypt.genSalt(12);
        hash = await bcrypt.hash(req.body.password, salt);
    }
    catch (err) {
        res.json({message: 'Password hashing failed.'});
        return;
    }

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        year: req.body.year,
        major: req.body.major,
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

user.get('/:userId', async (req, res) => {
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

user.delete('/:userId', async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params['userId'] });
        res.json(deleteUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Update User ---

user.patch('/:userId', async (req, res) => {
    try {
        const updateUser = await User.updateOne({ _id: req.params['userId'] }, { $set: { firstname: req.body['name'] }});
        res.json(updateUser);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Login to Existing User ---

user.post('/login', async (req, res) => {
    try {
        const loginUser = await User.findOne({username: req.body.username});
        if(loginUser !== null) {
            const passvalid = await bcrypt.compare(req.body.password, loginUser.password);
            res.json(passvalid);
        }
        res.json({ message: "No user found" });
    }
    catch (err) {
        res.json({ message: err });
    }
});

export default user;
