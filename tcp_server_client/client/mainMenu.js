
const readline = require('readline');
const {  sendPacket } = require('./connection.js')

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayOptionsCurrency = () =>{
    console.log('*** Moedas Disponíveis P/ Conversão ****');
    console.log('1. Dólar Americano');
    console.log('2. Euro');
    console.log('3. Libra Esterlina');
    console.log('4. Franco Suíço');
    console.log('5. Dólar Canadense');
}

function mainMenu(){
    console.log("\n")
    console.log('***** Bem-Vindo ao Conversor de Moedas *****')
    readLine.question('Por favor, insira o valor em R$ que deseja converter, substituindo virgula por ponto, caso haja: ', (realInput) => {
        console.log(realInput)
        displayOptionsCurrency();
        readLine.question('Por favor, escolha uma das opções acima e insira somente o número da opção desejada: ', (option) => {
            const packet = Buffer.from(`${realInput}::${option}`)
            sendPacket(packet)
        })
    })
}

module.exports = {mainMenu}



