const { type } = require('os');
const process = require('process');
const fs = require('fs');

const command = process.argv[2];
const storage = 'data.json';

function addTask() {
  const timestamp = new Date();
  const description = process.argv[3];
  
  const task = {
    id: 1,
    description: description,
    createdAt: timestamp
  }

  fs.readFile(storage, 'utf-8', (err, data) => {
    if (err) {
      console.error("error", err);
      return;
    }

    let jsonData = [];
    // get the data from storage
    if(!data) {
      console.log("empty");
    } else {
      jsonData = JSON.parse(data);
    }
  
    // update the id of each task
    task.id += jsonData.length;

    // add current task to the jsonData array
    jsonData.push(task);

    fs.writeFile(storage, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
      console.log("success");
      if (err) {
        console.err("Error", err)
        return;
      }
    })
  })
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
