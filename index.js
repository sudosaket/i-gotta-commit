#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');

const DATA_FILE = __dirname + '/data.json';

program
    .version('0.1.0')
    .description("Get a memorable random line from amazing songs!")
    .option('-t, --test');

program
    .command('add <line>')
    .option('-a, --artist <artist>', 'artist of the song')
    .option('-t --title <title>', 'name of the song')
    .action(function (line, options) {
        let entry = createEntry(line, options.artist, options.title);
        let data = readDataFromFile(DATA_FILE);
        data.push(entry);
        writeDataToFile(DATA_FILE, JSON.stringify(data, null, 2));
        process.exit(0);
    });

program.parse(process.argv);

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function readDataFromFile(fileName) {
    return JSON.parse(fs.readFileSync(fileName), 'utf8');
}

function writeDataToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

function createEntry(line, artist, title) {
    return {
        "line": line,
        "artist": artist,
        "title": title
    };
}

function main() {
    let entries = readDataFromFile(DATA_FILE);
    let index = generateRandomInteger(0, entries.length);
    let entry = entries[index];
    let line = entry.line;
    console.log(line);
}

main();
