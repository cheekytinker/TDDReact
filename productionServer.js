var path = require('path');
var express = require('express');

var port = 3001;
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('Prod server listening on port %s', port);
    }
});