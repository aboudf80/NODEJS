const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '/text');

const files = ['input1.txt', 'input2.txt', 'input3.txt'];
const lines = [];
const positions = [0, 0, 0];

// Read the three input files
for (let i = 0; i < files.length; i++) {
    const textIn = fs.readFileSync(`${dirPath}/${files[i]}`, 'utf8');

    if (textIn === '') {
        lines.push([]);
    } else {
        const arr = textIn.split(/\r?\n/);

        lines.push(arr);
    }   
}

let textOut = '';
let count = 1;

// Continue until all files are finished
while (
    positions[0] < lines[0].length ||
    positions[1] < lines[1].length ||
    positions[2] < lines[2].length
) {
    for (let j = 0; j < files.length; j++) {
        for (let k = 0; k < count && positions[j] < lines[j].length; k++) {
            textOut += lines[j][positions[j]] + '\n';
            positions[j]++;
        }
    }

    count++;
}

fs.writeFileSync(`${dirPath}/output.txt`, textOut);
console.log('File has been written');