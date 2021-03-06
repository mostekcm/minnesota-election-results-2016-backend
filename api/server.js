var express = require('express');
var request = require('request');
var cors = require('cors');

var whitelist = ['http://mnresults.herokuapp.com','http://minnesota-election-2016.herokuapp.com','https://mnresults.herokuapp.com','https://minnesota-election-2016.herokuapp.com','https://minnesota-election-2016-be.herokuapp.com','http://localhost:3000'];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        console.log(origin);
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    },
    optionsSuccessStatus: 200
};


var app = express();

app.get('/', cors(corsOptions), function(req, res) {
    var url = 'http://electionresults.sos.state.mn.us/Results/MediaResult/100?mediafileid=' + req.query.mediafileid; //apiServerHost + req.url;
    console.log(JSON.stringify(req.query));
    console.log(url);
    req.pipe(request(url)).pipe(res); //.catch(error => console.log(error));
});

module.exports = app;
