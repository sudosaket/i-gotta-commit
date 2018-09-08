#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const pkg = require('./package.json');

const DATA_FILE = __dirname + '/lyrics.txt';

program
    .version(pkg.version)
    .description("Fill you commit history with awesome song lyrics 🎵 💥");

program
    .command('add <lyrics>')
    .action(function (lyrics) {
        writeDataToFile(DATA_FILE, lyrics.trim());
        process.exit(0);
    });

program.parse(process.argv);

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function readDataFromFile(fileName) {
    let rawData = fs.readFileSync(fileName);
    return rawData.toString().split('\n').map(line => line.trim());
}

function writeDataToFile(fileName, data) {
    fs.appendFileSync(fileName, data);
}

function main() {
    let entries = readDataFromFile(DATA_FILE);
    let index = generateRandomInteger(0, entries.length);
    let lyrics = entries[index];
    let lines = lyrics.split('\\n');
    lines.forEach(line => console.log(line));
}

main();
