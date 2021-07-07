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

const apiRouter = require(path.join(__dirname,'router','apiRouter'));

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

// Route API calls to a separate router and controller
app.use('/api', apiRouter)

// Route everything else to the React UI at index.html
app.get('/', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

// Redirect all non-API paths back to the webroot - React Router handles all paths internally (SPA)
app.get('*', function (req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
});

// Finally, start listening for network traffic on the assigned port - game on!
app.listen(port, (err) => {
    if (err) {
        console.log('** ------------------- EXPRESS ERROR! ------------------- **')
        console.log(err)
        console.log('** ------------------------------------------------------ **')
    }
    console.log(`API Server started on port ${port}`)
});
