
const {mainMenu} = require('./mainMenu')
const { initUDPConnection, listenToPacket} = require('./connection.js')

initUDPConnection()
listenToPacket(mainMenu)
mainMenu()




