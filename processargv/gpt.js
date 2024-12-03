const process = require('process');
const fs = require('fs');

const command = process.argv[2];
const storage = 'tasks.json';
let idCounter = 1; // Initialize idCounter globally

// Read the storage file and get the current tasks
function loadData(callback) {
  fs.readFile(storage, 'utf-8', (err, data) => {
    if (err || !data) {
      callback([]); // If no data or error, return an empty array
      return;
    }
    try {
      const tasks = JSON.parse(data);
      callback(tasks);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
      callback([]); // Return an empty array if there is a parsing error
    }
  });
}

function add() {
  const description = process.argv[3];
  if (!description) {
    console.error("Error: Task description is required.");
    return;
  }

  loadData((tasks) => {
    // Set idCounter to the next id based on the highest task id
    if (tasks.length > 0) {
      idCounter = Math.max(...tasks.map(task => task.id)) + 1;
    }

    const task = {
      id: idCounter,
      description: description,
      createdAt: new Date(),
    };

    tasks.push(task); // Add the new task

    // Write updated tasks back to the file
    fs.writeFile(storage, JSON.stringify(tasks, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Task added successfully!");
    });
  });
}

function main() {
  switch (command) {
    case 'add':
      add();
      break;
    case 'help':
      console.log("Help: Use 'add' to add a new task.");
      break;
    default:
      console.log("Unknown command.");
  }
}

main();
