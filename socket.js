const { pricefetch } = require('./apicontroller');

const CronJob = require('cron').CronJob;

module.exports = async (io) => {
    io.on("connection", (socket) => {
        console.log(socket.id, "--connection--")

    })


    const trade = new CronJob('*/10 * * * * *', function () {
        pricefetch(io)
    })
    trade.start()

}