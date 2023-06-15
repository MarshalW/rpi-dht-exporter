#!/bin/bash

set -e

sudo cp -r . /opt/dht-exporter
sudo cp dht.service /etc/systemd/system/dht.service

# 启动
sudo systemctl daemon-reload 
sudo systemctl enable dht.service
sudo systemctl start dht.service