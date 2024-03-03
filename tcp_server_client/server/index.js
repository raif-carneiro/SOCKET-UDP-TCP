const net = require('net')
const {currencyConverter} = require('./currencyConverter')

const port = 8080
const host = 'localhost'

const server = net.createServer(function(socket) {
  console.log(`Server listening on ${host}:${port}`);
  socket.on('data', function(data) {
    console.log('Received: ' + data);
    // Converte valor recebido e encaminha para o cliente
    const valueToTransform = data.toString().split('::')[0]
    const valueTransformed = currencyConverter(valueToTransform)
    const response = Buffer.from(`${valueTransformed}`)
    socket.write(response)
  });
});

server.listen(port, host);




