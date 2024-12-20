import dotenv from 'dotenv';

// Load the .env file
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './../.env' }); // Explicitly specify the path if the .env file is not in the root directory
}

import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import session from "express-session";

import userRoute from './routes/userRouter.js';
import lectureRoute from './routes/lectureRouter.js';
import resourceRoute from './routes/resourceRouter.js';
import progressRoute from './routes/progressRouter.js';
// import paymentRoute from './routes/paymentRouter.js';

// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);
// console.log(process.env.ATLASDB_URL);
// console.log(process.env.SECRET);

const dbUrl = process.env.ATLASDB_URL;
const port = process.env.PORT || 4173; // Default port 4173 if not specified in .env

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

main();

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.error("ERROR in MONGO SESSION STORE:", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

const app = express(); // Initialize the app
const server = http.createServer(app); // Create the server

app.use(session(sessionOptions)); // Apply session middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/lecture', lectureRoute);
app.use('/api/v1/resource', resourceRoute);
app.use('/api/v1/progress', progressRoute);
// app.use('/api/v1/payment', paymentRoute);

app.get('/', (req, res) => {
    res.send("This is IIT BBS");
});

// Start the server
server.listen(port, () => {
    console.log(`Server is listening successfully at port ${port}`);
});
