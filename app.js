const express = require('express');
const app = express();
const socketio = require('socket.io');
// socket io runs on http server need to create that as well
const http = require('http');

const server = http.createServer(app);

app.get('/',function(req,res)
{
  res.send('Hello World!');
})

app.listen(3000);