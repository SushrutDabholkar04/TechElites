const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user')
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://Sushrut:sushrut123@sushutdabholkar.ck34njj.mongodb.net/SMART_WASTE';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));


const sensorDataSchema = new mongoose.Schema({
    volume: Number,
    humidity: Number,
    gasLevel: Number,
    timestamp: { type: Date, default: Date.now }
});
app.use('/api/user', userRoutes)
const SensorData = mongoose.model('Sample', sensorDataSchema, 'samples');


app.post('/api/sensordata', (req, res) => {
    try {
        const newData = new SensorData(req.body);
        newData.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
        res.status(400).json('Invalid JSON data');
    }
});


app.get('/api/sensordata', (req, res) => {
    SensorData.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
