#!/bin/bash

docker stop `docker ps | grep 'stevebrownlee/kennels' | awk '{ print $1 }'`

