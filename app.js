import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './src/config/db.js';
import formRoutes  from './src/routes/formRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sinkronisasi Database
sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables updated!');
});

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Gunakan rute untuk menjalankan aplikasi
app.use('/braisee', formRoutes);

// Server start
app.listen(3000, () => {
    console.log('Server is Running on http://localhost:3000');
});
