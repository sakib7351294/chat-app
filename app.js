let express = require('express');
let socket = require('socket.io');

// create express app
let app = express();

// static files (public folder)
app.use(express.static('public'));

// listen on Render's PORT or fallback 4500
let PORT = process.env.PORT || 4500;
let server = app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

// socket setup
let io = socket(server);

io.on('connection', (socket) => { 
    console.log("New user connected");

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data); 
    });

    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});
 
