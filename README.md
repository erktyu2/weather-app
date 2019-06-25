# weather-app
This is a very simple weather-app that works in terminal with command with shell flags.

It requires 2 api keys,

1- DarkSky api key. You can get your from https://darksky.net/dev

2- MapQuest api key. You can get your from https://developer.mapquest.com/

Once you create your api keys, replace 'YourKeyHere' with your keys in the file /config/values.js

const darkSkyApiKey = 'YourKeyHere'

const mapQuestApiKey = 'YourKeyHere'

If everything is set up, now you can run the command as below with wanted address 
and with -a or --address flag to get time zone, weather and the temprature.

Example:
node app.js -a 'istanbul'


Result:

Time Zone: Europe/Istanbul

Currently: Partly Cloudy

Temperature : 27°C
