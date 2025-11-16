const { WebSocketServer } = require('ws');

function uploadMessenger(httpServer){
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