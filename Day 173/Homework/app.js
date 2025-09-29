const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(morgan('common'));

app.use((req, res, next) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        req.body = JSON.parse(body);

        next();
    });
});

app.use((req, res, next) => {
    const { email } = req.body;

    if(!email || email !== 'Admin@gmail.com'){
        return res.status(403).json({
            status: "Fail",
            message: 'You are not allowed to view this content because you are not an Admin'
        });
    }

    next();
});

app.use((req, res) => {
    return res.status(200).json({
        status: 'success',
        message: 'Admin has private messages'
    });
});

app.listen(3000, () => {
    console.log('The server is running on port 3000');
});