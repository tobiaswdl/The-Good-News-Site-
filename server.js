const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Request made:', req.url);

    let filePath = './Views';
    
    switch(req.url) {
        case '/':
            filePath += '/HomePage.html';
            res.statusCode = 200;
            break;
        case '/Impressum':
            filePath += '/Impressum.html';
            res.statusCode = 200;
            break;
        case '/logIn.html':
            filePath += '/logIn.html';
            res.statusCode = 200;
            break;
        case '/HeadLineStory.html':
            filePath += '/HeadLineStory.html';
            res.statusCode = 200;
            break;
        case '/UserNewsAdd.html':
            filePath += '/UserNewsAdd.html';
            res.statusCode = 200;
            break;
        case '/HomePage.html':
            filePath += '/HomePage.html';
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
