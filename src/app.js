const sensor = require("node-dht-sensor");

const sensorType = 11;
const pin = 17;

function read(){
  sensor.read(sensorType, pin, function(err, temperature, humidity) {
    if (!err) {
      console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
    }
  });
}

setInterval(read,1000)