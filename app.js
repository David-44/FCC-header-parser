'use strict';

const http = require('http');

let httpserver = http.createServer();
httpserver.on('request', (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  let head = {
    ipaddress : req.connection.remoteAddress,
    'accept-language': req.headers['accept-language'],
    'user-agent' : req.headers['user-agent']
  };


  res.end(JSON.stringify(head));
});



let port = process.env.PORT || 3000;

httpserver.listen(port, function() {
  console.log('Listening on ' + port);
});
