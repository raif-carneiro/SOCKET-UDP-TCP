const UDP = require('dgram')


let client = null
const port = 8080
const hostname = 'localhost'

function initUDPConnection(){
    client = UDP.createSocket('udp4')
}

function sendPacket(packet){
    client.send(packet, port, hostname, (err) => {
        if (err) {
            console.error('Falha ao enviar Pacote !!')
        } else {
            console.log('Processando !!')
        }
    })
}

function listenToPacket(mainMenu){
    client.on('message', (message, info) => {
        console.log('O valor inserido convertido é igual a: ', message.toString())
        mainMenu()
    })
}


module.exports ={
    initUDPConnection,
    sendPacket,
    listenToPacket
}