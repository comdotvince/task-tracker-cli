const { type } = require('os');
const process = require('process');
const fs = require('fs');


const command = process.argv[2];
const storage = 'tasks.json';
let idCounter = 1;

function addTask() {
  const timestamp = new Date();
  const description = process.argv[3];
  
  
  const task = {
    id: idCounter+1,
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
  
    // add the new task to the jasonData
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
      console.log("add \n");
      break;
    
    case 'add':
      addTask();
      break;
    
  }
}

main();
