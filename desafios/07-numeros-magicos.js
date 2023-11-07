let count = 0

const INTERVAL_30_MINUTES = 1000 * 60 * 30
const INTERVAL_1_MINUTES = 1000 * 60
const INTERVAL_5_SECONDS = 1000 * 5

function lookForUpdades() {  
  console.log(count++)
}

function calculateDiscount(priceInReal, discountAmountInPercent) {
  return priceInReal * ( discountAmountInPercent / 100)
}

setInterval(lookForUpdades, INTERVAL_5_SECONDS)
console.log(calculateDiscount(100, 55))