const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send("Think Showcase Api Running")
})

app.get('/courses', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
console.log('Think Showcase Server Running')
})