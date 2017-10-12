var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

// initialize the server and configure support for ejs templates
const app = express();
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../views'));

// define the folder that will be used for static assets
// app.use(Express.static(path.join(__dirname, '../static')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//TODO: Install CORS???
//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//   //and remove cacheing so we get the most recent comments
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });




//now  we can set the route path & initialize the API
app.get('/', function(req, res) {
  res.json({ message: 'Server Initialized!'});
});


//db config
var mongoDB = 'mongodb://leeferfeefer:testtest@ds117625.mlab.com:17625/snuteam6';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to database...");
});
const port = process.env.PORT || 8080;
//starts the server and listens for requests
app.listen(port, function() {
  console.log(`server running on port ${port}...`);
});
