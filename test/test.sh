#!/bin/sh

echo ------------ Test With Node ------------
node node_modules/jasmine/bin/jasmine test/debounce.spec.js 
echo 
echo
echo
echo
echo ------------ Test With Browser ------------
node_modules/karma/bin/karma start karma.config.js