const sensor = require("node-dht-sensor");

const Koa = require('koa');
const app = new Koa();
const port = 8663

const sensorType = 11;
const pin = 17;

app.use(async ctx => {
    try {
        const { temperature, humidity } = await sensor.read(sensorType, pin);
        const message = `dhtexp_temperature ${temperature.toFixed(2)}
dhtexp_humidity ${humidity.toFixed(2)}
`

        ctx.body = message
    } catch (err) {
        console.error("Failed to read sensor data:", err);
    }
});

app.listen(port);

console.log(`node-dht-exporter run at: ${port}`);