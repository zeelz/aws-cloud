#!/bin/bash

sudo chmod -R 777 /home/ec2-user/ts-express

# Stop all servers and start the server
pm2 stop all
pm2 start /home/ec2-user/ts-express/build/index.js --name useribackend