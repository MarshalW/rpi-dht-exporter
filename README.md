# rpi dht export

部署在树莓派上，读取 dht11/22传感器的温湿度值，作为 prometheus 的 exporter。

## 直接部署

树莓派未安装 docker 的情况下直接部署。

```bash
# 下载
git clone https://github.com/MarshalW/rpi-dht-exporter.git
cd rpi-dht-exporter

# 修改 .env 设置引脚等
cp .env.example .env

# 安装
./install.sh

# 测试
curl localhost:8663
dhtexp_temperature 28.00
dhtexp_humidity 57.00
```

# 通过 docker 使用

## 命令

```bash
docker pull marshalw/rpi-dht-exporter:latest
docker run -d --privileged -p 8663:8663 --name dht-exporter marshalw/rpi-dht-exporter:latest
```

## 使用 docker compose

```yml
version: "3.9"

services:
  dht-exporter:
    image: marshalw/rpi-dht-exporter:latest
    container_name: dht-exporter
    restart: unless-stopped
    privileged: true
    ports:
      - 8663:8663
    environment:
      - SENSOR_TYPE=11 # 类型，dht11=11, dht22=22
      - PIN=17 # GPIO 17
      # - PREFIX=metrics # 默认 metrics
```