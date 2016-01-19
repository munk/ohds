#!/bin/bash

rm -f ohds.jar
curl -Lo ohds.jar https://git.io/vzl9y

if [ -f ohds.pid ]
then
  pid=`cat ohds.pid`
  kill -9 $pid
  rm -f ohds.pid
fi

java -jar ohds.jar 8081 & echo $! > ohds.pid
