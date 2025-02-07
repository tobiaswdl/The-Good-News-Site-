const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Request made:', req.url);

    let filePath = './views';
    
    switch(req.url) {
        case '/':
            filePath += '/HomePage.html';
            res.statusCode = 200;
            break;
        case '/Impressum':
            filePath += '/Impressum.html';
            res.statusCode = 200;
            break;
        case '/log-in':
            filePath += '/logIn.html';
            res.statusCode = 200;
            break;
        case '/Headlinestory':
            filePath += '/HeadLineStory.html';
            res.statusCode = 200;
            break;
        case '/User-News-Added':
            filePath += '/UserNewsAdded.html';
            res.statusCode = 200;
            break;
        default: 
            filePath += '/404.html'; 
            res.statusCode = 404;
            break;
    }


    res.setHeader('Content-Type', 'text/html');


    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            res.end('Error loading page');
        } else {
            res.end(data);
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});
