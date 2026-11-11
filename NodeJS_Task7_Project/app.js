
const fs = require('fs');

// Read the JSON file
const fileData = fs.readFileSync(`${__dirname}/users.json`);
const fileJSON = fileData.toString();
const users = JSON.parse(fileJSON);

// Count users
const userCount = users.length;

// Extract user names
let userNames = '';

for (let i = 0; i < users.length; i++) {
    userNames += users[i].name + '\n';
}

// Write output files
fs.writeFileSync(`${__dirname}/user_count.txt`, userCount.toString());
fs.writeFileSync(`${__dirname}/user_names.txt`, userNames);

console.log('Files have been written');
