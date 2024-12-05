const { type } = require('os');
const process = require('process');
const fs = require('fs');
const { time } = require('console');

const command = process.argv[2];
const updateId = process.argv[3];
const updateDes = process.argv[4];
const storage = 'data.json';


// sync function that read file and return the array
function readStorage() {
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
    createdAt: timestamp,
    updatedAt: timestamp
  }
    let data = readStorage();
    // update the id of each task
    task.id += data.length;

    // add current task to the jsonData array
    data.push(task);

    console.log(data);

    write(data);

  
}

function updateTask() {
  let data = readStorage();
  let newData = [];

  data.forEach(function (element) {
    console.log(element.id);

    if (updateId == element.id) {
      const updatedTask = {
        id: element.id,
        description: updateDes,
        createdAt: element.createdAt,
        updatedAt: new Date()
      }

      newData.push(updatedTask);
    } else {
      newData.push(element);

    }
  })
  write(newData);
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
    
    case 'update':
      updateTask();
      break;
    
  }
}

main();
