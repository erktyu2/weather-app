const requester = require('./geocode/geocode');
const yargs = require('yargs');
const weatherStatus = require('./darkSky/weatherStatus');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

requester.geoCodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weatherStatus.weatherPrognoses(results.lat, results.lng);
    }
});