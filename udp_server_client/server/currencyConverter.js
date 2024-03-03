
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function currencyConverter(value){
    const random =  getRandomArbitrary(1, 7)
    return value*random
}

module.exports = {currencyConverter}