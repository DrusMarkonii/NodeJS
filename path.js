const path = require('path')
const { fileURLToPath } = require('url')

console.log('Склеить путь: ', path.join(__dirname, 'first', 'second', 'third'))
// console.log('Получить абслолютный путь: ', path.resolve('first', 'second', 'third'))

const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
console.log('Парсинг пути', path.parse(fullpath))

//-------------------------------


const siteURL = 'http://licalhost:8080/users?id=5123';

const url = new URL(siteURL)

console.log(url)