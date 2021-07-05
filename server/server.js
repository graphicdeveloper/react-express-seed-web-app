// ===========================================================================
// @description: Basic Express Server - PORT 3001 by default (or set by env)
// @author: David Baldeschwieler
// ===========================================================================

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const helmet = require('helmet')
const logger = require("morgan");

const apiRouter = require(path.join(__dirname,'route','apiRouter'));

const app = express();
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../', 'client', 'build')))

// =========================================================================
// Express Config
// =========================================================================

app.use(logger("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet())
app.use(cors())

app.use('/api', apiRouter)

app.get('/ping', function (req, res) {
    res.status(200);
    return res.send('pong!')
})

app.get('/', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

app.get('*', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log('** ------------------- EXPRESS ERROR! ------------------- **')
        console.log(err)
        console.log('** ------------------------------------------------------ **')
    }
    console.log(`API Server started on port ${port}`)
});
