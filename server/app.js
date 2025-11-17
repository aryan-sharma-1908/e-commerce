const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth.route.js');
const connectDB = require('./database/database.js');
const corsOptions = require('./cors/corsoptions.js');

require('dotenv/config');

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('tiny'));

// Routes
app.use('/api/v1/auth', authRoutes);
app.get('/',(req,res) => {
    res.send('API is runnning');
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectDB();
})