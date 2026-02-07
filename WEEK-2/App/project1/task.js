import {validateTitle,validatePriority,validateDueDate } from "./validator.js";
const tasks = [];
function addTask(title, priority, dueDate) { //add new task
    if (!validateTitle(title)) {
    return "Invalid Title";
  }
  if (!validatePriority(priority)) {
    return "Invalid Priority";
  }
  if (!validateDueDate(dueDate)) {
    return "Invalid Due Date";
  }
  const task={
    id:tasks.length+1,
    title,
    priority,
    dueDate,
    completed:false
  };
  tasks.push(task);
  return "Task Added";
}
function getAllTasks() {
  return tasks;
}
//mark task as complete
function completeTask(taskId) {
  const task=tasks.find(t=>t.id===taskId);
  if (task) {
    task.completed=true;
    return "Task Completed";
  }
  return "Task Not Found";
}
export {addTask,getAllTasks,completeTask};
