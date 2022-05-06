#!/bin/bash

apt update -v
apt install docker.io
apt install git
apt install nginx

echo "<h2>hello worl</h2>" > /var/www/html/index.html