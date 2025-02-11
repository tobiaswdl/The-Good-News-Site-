const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true}));

// Static CSS and Image files 
app.use(express.static(path.join(__dirname, 'public')));

// Static HTML File 
app.use(express.static(path.join(__dirname, 'Views')));

// Dynamic Routing 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'HomePage.html'));
});

app.get('/Impressum', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'Impressum.html'));
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

// form page redirecting to User news page 

app.post('/UserNews', (req, res) => {
    console.log(req.body.title_of_post, req.body.content);
    res.sendFile(path.join(__dirname, 'Views', 'UserNews.html'));
});

// 404 routes 
app.use((requ, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});


//Start the server 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});