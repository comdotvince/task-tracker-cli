# task-tracker-cli

Task tracker is a project used to track and manage your tasks in command line using nodejs.

## how to run
1. clone the repo
2. instal nodejs

### example 
```
// Adding a new task
node tasker.js add "Buy groceries"
// Output: Task added successfully (ID: 1)

// Updating and deleting tasks
node tasker.js update 1 "Buy groceries and cook dinner"
node tasker.js delete 1

// Marking a task as in progress or done
node tasker.js mark-in-progress 1
node tasker.js mark-done 1

// Listing all tasks
node tasker.js list

# Listing tasks by status
node tasker.js list done
node tasker.js list todo
node tasker.js list in-progress

```

