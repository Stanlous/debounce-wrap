#!/bin/sh

echo ------------ Test With Node ------------
npm run test:node
echo 
echo
echo
echo
echo ------------ Test With Browser ------------
npm run test:browser:phantomjs
