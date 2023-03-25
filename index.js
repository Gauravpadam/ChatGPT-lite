// An express server, Which will handle stuff

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.listen(port, () => {
    console.log('Example app listening');
});