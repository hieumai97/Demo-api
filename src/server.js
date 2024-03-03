const express = require('express');

const app = express();
const hostname = "localhost";
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>!doctype html hieu'</h1>`)
})

app.listen(port, hostname, () => {
    console.log(`listening on port http://${hostname}:${port}`)
});