#!/bin/bash
#
# Access with http://kennels.nss.local:8082/
#
if [ -z $1 ]
then
  docker run -d -p 8082:8082 stevebrownlee/kennels:latest

else
  docker run -it -p 8082:8082 stevebrownlee/kennels:latest

fi

