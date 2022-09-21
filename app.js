
const fromDollarToYen = (usd) => {
    return (usd / 1.2) * 127.9
}

const fromEuroToDollar = (euro) => {
    return euro * 1.2
}

const fromYenToPound = (yen) => {
    return (yen / 127.9) * 0.8
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };