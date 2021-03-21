import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
import userRoutes from './routes/users.js';
import eventRoutes from './routes/events.js';

const app = express();
app.use(cors());

// --- Middlewares ---

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRoutes);
app.use('/events', eventRoutes);


// --- Routes ---

app.get('/', (req, res) => {
    res.json({message: 'API Home'});
});

// --- Connect to MongoDB ---

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database connection status: ', (mongoose.connection.readyState ? "Connected!" : "Something went wrong..."));
});

// --- Listen On Port 3001 ---

app.listen(3001);

