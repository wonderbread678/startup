const { WebSocketServer } = require('ws');

let socketServer;

function peerProxy(httpServer){
    socketServer = new WebSocketServer({ server: httpServer });
    socketServer.on('connection', (socket => {
        console.log("new connection");
        socket.isAlive = true;
        socket.on('pong', () => {
            socket.isAlive = true;
        });
    }));

    setInterval(() => {
        socketServer.clients.forEach((client) => {
            if (client.isAlive === false){
                return client.terminate();
            }
            client.isAlive = false;
            client.ping();
        });
    }, 10000);
}

function uploadMessenger(userName, title){
    const message = JSON.stringify({
        type: "upload",
        user: userName,
        title: title,
        date: new Date().toISOString()
    });
    console.log("You totally just uploaded that!", message);

    socketServer.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(message);
        }
    });
}

module.exports = { peerProxy, uploadMessenger };