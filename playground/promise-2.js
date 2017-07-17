const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodeAddress = encodeURIComponent(address);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Cannot connect to Google Server');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find address');
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    lattitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                }
                )
            }
        });
    })

};
geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})