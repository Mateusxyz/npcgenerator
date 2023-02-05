//entry point

import express from 'express';
import { apiRouter } from './routes/api.mjs';
import { router } from './routes/main.mjs';
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//loading main router
app.use("/", router);

//loading api router
app.use("/api/", apiRouter);

app.listen(8080);
console.log('Server is listening on port 8080');