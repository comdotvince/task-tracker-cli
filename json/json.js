const fs = require('fs');
const { json } = require('stream/consumers');


// path to storage 
const storagePath = 'storage.json';

let tasks = {
  id: 1,
  description: "watch tv"
};


fs.readFile(storagePath, 'utf-8', (err, data) => {
  if (err) {
    console.error("error", err);
    return;
  }

  // get the data from storage
  const jsonData = JSON.parse(data);

  // add the new task to the jasonData
  jsonData.push(tasks);

  fs.writeFile(storagePath, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
    console.log("success");
    if (err) {
      console.err("Error", err)
      return;
    }
  })
})
