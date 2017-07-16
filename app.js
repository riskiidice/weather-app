const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});