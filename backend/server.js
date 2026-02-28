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

app.post('api/post', (req, res) => {
    res.json({ message: "Post created!" });
})

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
});