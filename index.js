const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Think Showcase Api Running")
})

app.listen(port, () => {
console.log('Think Showcase Server Running')
})