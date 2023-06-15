# rpi dht export

部署在树莓派上，读取 dht11/22传感器的温湿度值，作为 prometheus 的 exporter。

## 直接部署

树莓派未安装 docker 的情况下直接部署。

```bash
git clone https://github.com/MarshalW/rpi-dht-exporter.git
cd rpi-dht-exporter
npm i
./install.sh

curl localhost:8663
dhtexp_temperature 28.00
dhtexp_humidity 57.00
```

# 通过 docker 使用

```bash
docker pull marshalw/rpi-dht-exporter:latest
docker run -it --rm --privileged -p 8663:8663 --name dht-exporter marshalw/rpi-dht-exporter:latest
```