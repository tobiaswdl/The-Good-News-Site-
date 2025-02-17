const express = require('express');
const path = require('path');
require('dotenv').config({ path: './logInData.env'});
const { connectToDb } = require('./db');
const mongoose = require('mongoose');
const app = express();
const userNewsRoutes = require('./routes/userNewsRoutes');


// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to DB and start server
const PORT = 3000;
connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('HomePage');
});

app.get('/logIn', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'logIn.html'));
});

app.get('/HeadLineStory', (req, res) => {
    res.render('HeadLineStory');
});

app.get('/UserNewsAdd', (req, res) => {
  res.render('UserNewsAdd');
});

app.get('/Impresum', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'Impresum.html'));
  });

app.use('/UserNews', userNewsRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
  });


