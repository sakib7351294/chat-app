let express = require('express');
let http = require('http');
let socketio = require('socket.io');

let app = express();
let server = http.createServer(app);

// socket setup with CORS
let io = socketio(server, {
  cors: {
    origin: "*",  // allow all origins (for testing, can restrict later)
    methods: ["GET", "POST"]
  }
});

// static files
app.use(express.static('./public'));

// port
let PORT = process.env.PORT || 4500;
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// socket
io.on('connection', (socket) => {
  console.log("New user connected");

  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });
});
