#!/bin/bash

set -e

docker buildx use mybuilder

docker buildx build --push \
--platform linux/arm64 \
--tag marshalw/rpi-dht-exporter:latest .