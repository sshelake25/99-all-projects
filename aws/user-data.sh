#! /bin/bash

apt update -v
apt install docker.io
apt install git
apt install nginx
apt install node

echo "<h2>hello world</h2>" > /var/www/html/index.html