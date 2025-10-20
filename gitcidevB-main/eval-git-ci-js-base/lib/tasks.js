
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


function countDone() {
  return tasks.filter(t => t.done).length;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return false; // Cas d'erreur : id inexistant

  task.done = !task.done;
  return true;
}

function addTask(name) {
  if (typeof name !== 'string') throw new Error('name must be a string');
  const trimmed = name.trim();
  if (trimmed.length === 0) throw new Error('name cannot be empty');
  const task = { id: String(nextId++), name: trimmed, done: false };
  tasks.push(task);
  return task;
}