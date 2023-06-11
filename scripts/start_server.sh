#!/bin/bash

sudo chmod -R 777 /home/ec2-user/ts-express

cd /home/ec2-user/ts-express

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null & 