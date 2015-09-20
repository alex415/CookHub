var express = require('express'),
    app = express(),
    request = require('request'),
    bodyParser = require('body-parser');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// api request
app.post('/api', function (req, res) {
  var recipe = req.body.tag;
  request("http://food2fork.com/api/search?key=c75d4d5e1941dafbbdc4b6d0ba39b1cf&&q=" + recipe, function (error, response, body) {
    res.json(body);
    console.log(recipe);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});