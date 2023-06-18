#!/bin/bash

set -e

# docker buildx create --name mybuilder --use --bootstrap
# docker buildx use mybuilder

docker buildx create --platform linux/arm64 --name rpibuilder --use

docker buildx build --push \
--platform linux/arm64 \
--tag marshalw/rpi-dht-exporter:latest .

docker buildx rm rpibuilder