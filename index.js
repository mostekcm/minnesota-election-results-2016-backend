var backend = require('./api/server');
backend.set('port', process.env.PORT || 3001);

backend.listen(backend.get('port'), function() {
    console.log('Backend server listening on port ' + backend.get('port') + ' in ' + backend.get('env') + ' mode');
});