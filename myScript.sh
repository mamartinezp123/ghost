#!/bin/bash

cd ./TagsAndModulesTests/
npm install
npm test
cd ..
cd ./ghost-cucumber-playwright/
npm install
npm test



