const fs = require('fs'); 
const path = require('path');

const dirPath = path.join(__dirname, '/text');

const files = [
    'input1.txt',
    'input2.txt',
    'input3.txt',
    'input4.txt',
    'input5.txt',
    'input6.txt',
    'input7.txt',
    'input8.txt',
    'input9.txt',
    'input10.txt',
]

let textOut = '';

for (let i = 0; i < files.length; i++) {

  // Read the current file
  const textIn = fs.readFileSync(`${dirPath}/${files[i]}`, 'utf-8');

  // Split the file content into lines
  const arr = textIn.split(/\r?\n/);

  // Copy 1 line from file 1, 2 from file 2, ... .
  for (let j = 0; j < i + 1 && j < arr.length; j++) {
    textOut += arr[j] + '\n';
  }
}

// Display the result
console.log(textOut);

// Write the result into a new file
fs.writeFileSync(`${dirPath}/output.txt`, textOut);