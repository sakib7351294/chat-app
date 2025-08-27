let socket = io.connect('http://localhost:4500');

let output = document.getElementById('messages');
let handle = document.getElementById('handle');
let message = document.getElementById('messageInput');
let button = document.getElementById('sendButton');


button.addEventListener('click', ( ) => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    }); 
})

socket.on('chat', (data)=>{
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});