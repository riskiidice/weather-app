const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeAddress = encodeURIComponent(address)

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to Google Server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address');
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            }
            )
        }
    });
}

module.exports = {
    geocodeAddress
};