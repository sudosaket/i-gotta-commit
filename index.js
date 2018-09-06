#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

let items = JSON.parse(fs.readFileSync(__dirname + '/data.json'), 'utf8');

program
    .version('0.1.0')
    .description("Get a memorable random line from amazing songs!")
    .parse(process.argv);

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getItemAt(index) {
    return items[index];
}

function getLineFor(index) {
    let item = getItemAt(index);
    return item.line;
}

function main() {
    let index = generateRandomInteger(0, items.length);
    let line = getLineFor(index);
    console.log(line);
}

main();