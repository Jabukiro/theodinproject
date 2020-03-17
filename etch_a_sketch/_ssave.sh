#!/bin/bash
#syncs the files to the root system

echo "Synching with the folder @ /var/www/html/JavaScript30"
rsync -avr --exclude="_*" --exclude=".*" ~/Documents/git/odin_on_rails/etch_a_sketch/ /var/www/html/odin_on_rails/etch_a_sketch/
