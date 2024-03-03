const net = require('net')


let client = null
const port = 8080
const host = 'localhost'

function initTCPConnection(){
    client = new net.Socket()
    client.connect(port,host)
    client.on('error', (err) => {
        console.error('Error socket:', err);
    });
}



function sendPacket(packet){
    client.write(packet)
}

function listenToPacket(mainMenu){
    client.on('data', (data) => {
        console.log('O valor inserido convertido é igual a: ', data.toString())
        mainMenu()
    })
   
}


module.exports ={
    initTCPConnection,
    sendPacket,
    listenToPacket
}