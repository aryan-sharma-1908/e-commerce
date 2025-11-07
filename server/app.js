const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
require('dotenv/config');

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})