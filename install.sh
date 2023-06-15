#!/bin/bash

set -e

sudo cp -r . /opt/dht-exporter
sudo cp dht.service /etc/systemd/system/dht.service