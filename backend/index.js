import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import carRoutes from './Routes/carRoutes.js';

dotenv.config();

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello there!");
});

app.use('/auth', authRoutes);
app.use('/cars', carRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
