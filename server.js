const express = require('express');
const path = require('path');
require('dotenv').config();
const { connectToDb } = require('./db');
const mongoose = require('mongoose');
const app = express();
const userNewsRoutes = require('./routes/userNewsRoutes');


// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('HomePage');
});

app.get('/logIn', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'logIn.html'));
});

app.get('/HeadLineStory', (req, res) => {
    res.render('HeadLineStory');
});

app.get('/UserNewsAdd', (req, res) => {
  res.render('UserNewsAdd');
});

app.get('/Impresum', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Impresum.html'));
  });

app.use('/UserNews', userNewsRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  });

// Export for testing
module.exports = app;

// Start the Server 
if (process.env.NODE_ENV !== 'test') {
    connectToDb((err) => {
      if (err) {

        console.error('Database connection failed:', err);
 
        process.exit(1);
      } else {
        // Only start the server if DB connected
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      }
    });
  }
  