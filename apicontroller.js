const axios = require('axios');

let lastprice = 0
exports.pricefetch = async (io) => {

    const config = {
        method: 'get',
        url: 'https://api.binance.com/api/v3/avgPrice?symbol=BTCBUSD',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            let currentprice = Number(response.data.price)
            console.log(lastprice);
            if (lastprice !== 0) {
                if (lastprice - currentprice >= 1.5) {
                    io.sockets.emit("changedprice", { "state": "⬇️", "price": currentprice })
                }
                if (currentprice - lastprice >= 1.5) {
                    io.sockets.emit("changedprice", { "state": "⬆️", "price": currentprice })
                }
            }
            lastprice = currentprice
        })
        .catch(function (error) {
            console.log(error);
        });

}