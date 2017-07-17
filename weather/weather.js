const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/037637312525a1e5a6a240d01bc977fe/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect forecast.io server');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined,
                {
                   temperature:  body.currently.temperature,
                   apparentTemperature: body.currently.apparentTemperature
                });
        }

    }
    )
}

module.exports = {
    getWeather
};