import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import postsRoutes from './routes/users.js';
import router from "./routes/users.js";

const app = express();

// --- Middlewares ---

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/posts', postsRoutes);

// --- Routes ---

app.get('/', (req, res) => {
    res.send('We are home!');
});

// --- Connect to MongoDB ---

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database connection status: ', (mongoose.connection.readyState ? "Connected!" : "Something went wrong..."));
});

// --- Listen On Port 3000 ---

app.listen(3000);

