const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    console.log('Route /api hit');
    res.json({ 
        message: "Welcome to the API!" 
    });
});

// verifyToken is the middleware function

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            return res.status(403).json({ message: 'Token is required' });
        } else {
            res.json({
                message: 'Post created!',
                authData
            })
        }
    })
})

app.post('/api/signin', (req, res) => {
    const user = {
        id: 1,
        username: 'akhil',
        email: 'akhil@gmail.com'
    }

    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({ token });
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) {
        return res.status(403).json({ message: 'Token is required' });
    } else {
        console.log(bearerHeader)
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
}

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});