import express from "express";
import Event from '../models/events.js';

const event = express.Router();

// --- Return List of Current events ---

event.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Create New event ---

event.post('/create', async (req, res) => {
    const event = new Event({
        name: req.body.name,
        startDate: Date.now(),
    });
    try {
        const saveEvent = await event.save();
        res.json(saveEvent);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// --- Get event By Id ---

event.get('/:eventId', async (req, res) => {

});

// --- Delete event By Id ---

event.delete('/:eventId', async (req, res) => {

});

// --- Update event ---

event.patch('/:eventId', async (req, res) => {

});

export default event;