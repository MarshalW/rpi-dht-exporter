const sensor = require("node-dht-sensor");

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const fs = require('fs')
const gpioPath = '/dev/gpiomem'

const prefix = process.env.PREFIX || 'metrics'
const port = process.env.PORT || 8663

const sensorType = process.env.SENSOR_TYPE || 11;
const pin = process.env.PIN || 17;

const router = new Router({
    prefix: `/${prefix}`
});

app.use(router.routes());

router.get('/', async (ctx, next) => {
    try {
        if (!fs.existsSync(gpioPath)) {
            ctx.body = '--'
            return
        }
        const { temperature, humidity } = await sensor.read(sensorType, pin);
        const message = `dhtexp_temperature ${temperature.toFixed(2)}
dhtexp_humidity ${humidity.toFixed(2)}
`

        ctx.body = message
    } catch (err) {
        console.error("Failed to read sensor data:", err);
    }
    next();
});

app.listen(port);

console.log(`node-dht-exporter run at: ${port}/${prefix} `);