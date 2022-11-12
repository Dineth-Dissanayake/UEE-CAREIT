 import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {connect} from './utils/db.connection';

const auth = require("./api/middleware/pw.auth");

const app = express();
const PORT = process.env.PORT || "8050";

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "20mb" }));

//IMPORT ROUTES
const FoodRoutes = require("./api/routes/food.r");
app.use(FoodRoutes);

app.use("/api/", require("./api/routes/user.auth.r"));

app.listen(PORT, () => {
    console.log('🚀 SERVER IS UP & RUNNING ON:', PORT);
    connect();
});