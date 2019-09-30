#!/usr/bin/env node

const fs = require('fs');

const DATA_FILE = __dirname + '/lyrics.txt';

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function readDataFromFile(fileName) {
    let rawData = fs.readFileSync(fileName);
    return rawData.toString().split('\n').map(line => line.trim());
}

(function main() {
    let entries = readDataFromFile(DATA_FILE);
    let index = generateRandomInteger(0, entries.length);
    let lyrics = entries[index];
    let lines = lyrics.split('\\n');
    lines.forEach(line => console.log(line.trim()));
})();
