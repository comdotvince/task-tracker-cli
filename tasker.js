const { type } = require('os');
const process = require('process');
const fs = require('fs');

const command = process.argv[2];
const storage = 'data.json';


// sync function that read file and return the array
function read() {
  try {
    const data = fs.readFileSync(storage, 'utf-8');
    if (!data) return [];
    return JSON.parse(data);
    
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

function write(jsonData) {
  try {
    fs.writeFileSync(storage, JSON.stringify(jsonData, null, 2), 'utf-8');

  } catch (err) {
    console.error("Error writing file:", err);
  }
}


// function to write file
function addTask() {
  const timestamp = new Date();
  const description = process.argv[3];
  
  const task = {
    id: 1,
    description: description,
    createdAt: timestamp
  }
    let data = read();
    // update the id of each task
    task.id += data.length;

    // add current task to the jsonData array
    data.push(task);

    console.log(data);

    write(data);

  
}

function main() {
  switch(command) {
    case 'help':
      console.log("help working");
      break;
    
    case 'list':
      listTask();
      break;
    
    case 'add':
      addTask();
      break;
    
  }
}

main();
