const { WebSocketServer } = require('ws');

let socketServer;

function peerProxy(httpServer){
    const socketServer = new WebSocketServer({ server: httpServer });
    socketServer.on('connection', (socket => {
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
        user: userName,
        title: title,
        date: new Date().toISOString()
    });

    socketServer.clients.forEach((client) => {
        if (client !== socket && client.readyState === client.OPEN) {
            client.send(message);
        }
    });
}

module.exports = { peerProxy, uploadMessenger };