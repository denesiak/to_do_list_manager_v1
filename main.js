const tasks = [
  { id: 1, title: 'Learn Data Structures: Arrays / Object Literals', completed: true },
  { id: 2, title: 'Learn Functions', completed: true },
  { id: 3, title: 'Practice Functions', completed: false },
  { id: 4, title: 'Practice Loops', completed: true },
  { id: 5, title: 'Practice Loops', completed: false }
]


function addTask(title) {

 if (typeof title !== 'string' || title.trim() === '') {
    console.log('Error: task title cannot be empty.');
    return null;
}
    let lastId = 0;
    for (const task of tasks){
        if (task.id > lastId) {
            lastId = task.id;
        }
    }
    const newId = lastId + 1;

    const newTask = {
        id: newId,
        title: title.trim(),
        completed: false
    };

    tasks.push(newTask);
    return newTask;

}

function showTasks() {
  if (tasks.length === 0) {
    console.log('No tasks yet.');
    return;
  }

  for (const task of tasks) {
    let status = '[ ]';

    if (task.completed) {
      status = '[x]';
    }

    console.log(`${status} ${task.id} - ${task.title}`);
  }
}

function markCompleted(id) {
  for (const task of tasks) {
    if (task.id === id) {
      task.completed = true;
      return task;
    }
  }

  console.log(`Error: task with id ${id} not found.`);
  return null;
}

function removeTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
      console.log(`Task ${id} removed.`);
      return true;
    }
  }

  console.log(`Error: task with id ${id} not found.`);
  return false;
}

addTask('Learn Arrays');
addTask('   ');
markCompleted(3);
removeTask(5);
markCompleted(999);
removeTask(999);
showTasks();