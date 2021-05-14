//to access and use file systems on our system
//jshint esversion 7
//https://nodejs.org/api/fs.html#fs_file_system
//const fs = require('fs');
//fs.copyFileSync('file1.txt', 'file2.txt');
//fs.readFileSync('file2.txt');

const marvelchar = require('marvel-comics-characters');
var anythree = marvelchar.random(3);
console.log(anythree);
var randomChar = marvelchar.random();
console.log(randomChar);
console.log(marvelchar);
