import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import userRoute from './routes/userRouter.js';
import lectureRoute from './routes/lectureRouter.js';
import resourceRoute from './routes/resourceRouter.js';
import progressRoute from './routes/progressRouter.js';
// import paymentRoute from './routes/paymentRouter.js';

dotenv.config({
    path: "./.env",
});

const mongoURI = process.env.DATABASE;
const port = process.env.PORT || 4173;

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbname: "CodeForge" })
        .then((data) => console.log(`Connected to MongoDb: ${data.connection.host}`))
        .catch((err) => { throw err; });
};

connectDB(mongoURI);

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/lecture', lectureRoute);
app.use('/api/v1/resource', resourceRoute);
app.use('/api/v1/progress', progressRoute);
// app.use('/api/v1/payment', paymentRoute);

app.get('/', (req, res) => {
    res.send("This is IIT BBS");
});

server.listen(port, () => {
    console.log(`Server is listening successfully at port ${port}`);
});
