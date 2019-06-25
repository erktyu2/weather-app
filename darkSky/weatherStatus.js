const request = require('request');
const { darkSkyApiKey } = require('../config/values')

function weatherPrognoses(lat, lng) {
    request({
        url: `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        var timeZone = body.timezone;
        var currently = body.currently.summary;
        var temperature = body.currently.temperature;
        temperature = Math.round((temperature - 32) * (5 / 9));
        console.log(`Time Zone: ${timeZone}`);
        console.log(`Currently: ${currently}`);
        console.log(`Temperature : ${temperature}°C`);
    });
}

module.exports.weatherPrognoses = weatherPrognoses;