const { type } = require('os');
const process = require('process');

const command = process.argv[2];

let tasks = [{
  
}];

function add() {
  const task = process.argv[3];
  tasks.push(task);
  console.log(tasks[0]);

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
      add();
      break;
    
  }
}

main();
