const morning = require('./morning')
const evening = require('./evening')

global.name = 'Dima'

module.exports = {
    getMessage: function () {
        const curDate = new Date()
        const curHours = curDate.getHours()
        if (curHours < 15 && curHours > 4) {
            return morning
        } else return evening
    },
}

