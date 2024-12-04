const fs = require('fs');
const storage = 'data.json';

function read() {
  try {
    const data = fs.readFileSync(storage, 'utf-8');
    if (!data) return 'empty';
    return JSON.parse(data);
    
  } catch (err) {
    console.error("Error reading file:", err);
  }
}


console.log(read());