
const {mainMenu} = require('./mainMenu')
const { initTCPConnection, listenToPacket} = require('./connection.js')

initTCPConnection()
listenToPacket(mainMenu)
mainMenu()




