const fs = require('fs');
const { json } = require('stream/consumers');

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

  const jsonData = JSON.parse(data);

  jsonData.push(tasks);

  fs.writeFile(storagePath, JSON.stringify(jsonData, null, 2), 'utf-8', (err) => {
    
  })
})

try {
  fs.writeFileSync('storage.json', strFruits, 'utf-8');
  console.log("success");
} catch(error) {
  console.log(error);
}