var express = require('express'),
    app = express(),
    http = require('http');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('hello world');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port: " + app.get('port'));
});