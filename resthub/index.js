// FileName: index.js// Import express
let express = require('express')
// Initialize the app
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let apiROutes = require('./api-routes')

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

app.use('/api', apiROutes);
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});