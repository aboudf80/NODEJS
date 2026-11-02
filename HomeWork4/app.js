
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
];

let textOut = '';

try {
    // Read each file and copy the required lines
    for (let i = 0; i < files.length; i++) {

        const textIn = fs.readFileSync(`${dirPath}/${files[i]}`, 'utf-8');

        const arr = textIn.split(/\r?\n/);

        // Remove the final empty element if it exists
        if (arr[arr.length - 1] === '') {
            arr.pop();
        }

        // Copy the required number of available lines
        for (let j = 0; j < i + 1 && j < arr.length; j++) {
            textOut += arr[j] + '\n';
        }
    }

    // Display and save the result
    console.log(textOut);
    fs.writeFileSync(`${dirPath}/output.txt`, textOut);

} catch (error) {
    // Handle file reading or writing errors
    console.log('Error: ' + error.message);
}
