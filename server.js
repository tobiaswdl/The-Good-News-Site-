const express = require('express');
const path = require('path');
const { connectToDb } = require('./db');
const Block = require('./models/Block');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

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
  res.sendFile(path.join(__dirname, 'Views', 'HomePage.html'));
});

app.get('/logIn', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'logIn.html'));
});

app.get('/HeadLineStory', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'HeadLineStory.html'));
});

app.get('/UserNewsAdd', (req, res) => {
  res.sendFile(path.join(__dirname, 'Views', 'UserNewsAdd.html'));
});

// 1. GET /UserNews - Render list of blocks
app.get('/UserNews', async (req, res) => {
  try {
    const blocks = await Block.find().sort({ title: 1 });
    res.render('UserNews', { blocks });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user news');
  }
});

// 2. GET /UserNews/:id - Render single blog detail
app.get('/UserNews/:id', async (req, res) => {
  try {
    const block = await Block.findById(req.params.id);
    if (!block) {
      return res.status(404).send('Blog post not found');
    }
    res.render('blogDetail', { block });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving blog detail');
  }
});

// POST /UserNews - Handle form submission
app.post('/UserNews', async (req, res) => {
  try {
    const { title_of_post, content } = req.body;
    const userBlock = new Block({ title: title_of_post, text: content });
    await userBlock.save();
    const blocks = await Block.find().sort({ title: 1 });
    res.render('UserNews', { blocks });
  } catch (error) {
    console.error(error);
    res.status(400).send(`Error: ${error.message}`);
  }
});

// 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});
