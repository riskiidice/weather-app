const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Addressto fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;
// Raw Address : 1301 lombard street philadelphia

var encodeAddress = encodeURIComponent(argv.address)

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});