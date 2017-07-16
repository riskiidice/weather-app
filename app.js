/* const yargs = require('yargs');

const geocode = require('./geocode/geocode')

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Addressto fetch weather for',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});
 */
//037637312525a1e5a6a240d01bc977fe
const request = require('request');

request({
    url: `https://api.darksky.net/forecast/037637312525a1e5a6a240d01bc977fe/13.858813,100.4875818`,
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect forecast.io server');
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather');
    } else if (response.statusCode === 200) {
        console.log(body.currently.temperature);
    }

}
)