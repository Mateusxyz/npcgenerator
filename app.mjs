//entry point
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import { apiRouter } from './routes/api.mjs';
import { router } from './routes/main.mjs';
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//loading main router
app.use("/", router);

//loading api router
app.use("/api/", apiRouter);

startServices()
    .then(() => {
        console.log('Server is listening on port 8080');
    })
    .catch((err) => {
        console.error(err);
    })

async function startServices() {
    mongoose.set('strictQuery', true);
    //starting database
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.iswbgmc.mongodb.net/?retryWrites=true&w=majority`)

    //starting express webserver
    app.listen(8080);
}

