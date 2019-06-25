const request = require('request');
const { mapQuestApiKey } = require('../config/values')

var geoCodeAddress = (address, callback) => {

    address = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestApiKey}&location=${address}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('e.g. error', response);
        } else {
            var result = {
                address: body.results[0].providedLocation.location,
                lat: body.results[0].locations[0].latLng.lat,
                lng: body.results[0].locations[0].latLng.lng
            }
            callback(undefined, result);
        }
    });
};


module.exports.geoCodeAddress = geoCodeAddress;