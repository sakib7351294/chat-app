let express = require('express');
let socket = require('socket.io');

// create express app
let app = express();

// static files
app.use(express.static('./public'));

// listen on port 4500
let PORT = process.env.PORT || 4500;
let server = app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});


// socket setup
let io = socket(server);

io.on('connection', (socket)=>{ 

      socket.on('chat', (data)=>{
            io.sockets.emit('chat', data); 
      });
});
