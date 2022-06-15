/**
 * Converts a json file from ubii-web-evaluation JSON to CSV
 * https://github.com/goldst/ubii-web-evaluation
 * Change the file name, allowed elements and observed option below and run it like this:
 * 
 * node convert-to-csv > output.csv
 * 
 * after converting all needed files, they can be further processed with other commands, eg:
 * libreoffice --headless --convert-to ods *.csv
 */

const input = 'WWW-firefox.json';
const allowedElements = ['LeftHand', 'HAND_LEFT'];
const observedOption1 = 'position' // position or quaternion
const observedOption2 = 'x' // x, y, z (or w for quaternion)

const fs = require('fs');
const file = JSON.parse(fs.readFileSync(input, 'utf-8'));

const filter = e => e.find(element => allowedElements.includes(element.id));

const data = [
    ...file.A.map(({timestamp, data}) => ({ timestamp, a: filter(data.elements)?.pose })),
    ...file.B.map(({timestamp, data}) => ({ timestamp, b: filter(data.elements)?.pose }))
]
    .filter(data => data.a || data.b)
    .map(x => ({...x, timestamp: new Date(x.timestamp)}))
    .sort((x, y) => x.timestamp - y.timestamp)
    .map(x => ({...x, timestamp: x.timestamp.getTime() / 1000}))
    .map((x, i, a) => `${x.timestamp - a[0].timestamp},${x.a?.[observedOption1]?.[observedOption2] ?? ''},${x.b?.[observedOption1]?.[observedOption2] ?? ''}`)
    .join('\n');



console.log(data);