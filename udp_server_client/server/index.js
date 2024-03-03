const UDP = require('dgram')
const {currencyConverter} = require('./currencyConverter')
const server = UDP.createSocket('udp4')

const port = 8080

server.on('listening', () => {
  const address = server.address()
  console.log('Escutando ... ', address.address, 'Port: ', address.port)
})

server.on('message', (message, info) => {
  console.log('Message', message.toString())
  // Converte o valor recebido
  const valueToTransform = message.toString().split('::')[0]
  const valueTransformed = currencyConverter(valueToTransform)
  const response = Buffer.from(`${valueTransformed}`)
 

  server.send(response, info.port, info.address, (err) => {
    if (err) {
      console.error('Falha ao responder !!')
    } else {
      console.log('Resposta enviada com sucesso!!')
    }
  })
})

server.bind(port)
