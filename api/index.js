
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');

// dotenv.config({ path: './config/config.env' });
// const port = process.env.PORT;

const packagesRoutes = require('./controllers/PackageController');
const connectDB = require('./config/db');

connectDB();


app.use(express.urlencoded({ extended: false }));

app.use('/packages', );

app.listen(port, () => console.log(`Server started on port ${port}`));