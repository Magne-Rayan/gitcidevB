
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset };

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return false; // Cas d'erreur : id inexistant

  task.done = !task.done;
  return true;
}
