const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5ca3f5674cafddb706442549d0f39d59&query=' + latitude + "," + longitude
    request({ url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }else if(response.body.error){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,"It is currently " + response.body.current.temperature + " and feels like " + response.body.current.feelslike)
        }
    })
}
module.exports = forecast