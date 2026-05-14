import {validateTitle,validatePriority,validateDueDate} from "./validator.js";
const tasks=[]; //store all tasks
//Add new task
function addTask(title,priority,dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid prio";
  if (!validateDueDate(dueDate)) return "Invalid due date";
  const newTask = {
    id:tasks.length+1,
    title,
    priority,
    dueDate,
    completed: false
  };
  tasks.push(newTask);
  return "Task added";
}
//get all tasks
function getAllTasks() {
  return tasks;
}
//mark task as complete
function completeTask(taskId) {
  const task=tasks.find(t=>t.id===taskId);
  if (task) {
    task.completed=true;
    return "Task marked as complete!";
  }
  return "Error: Task not found";
}
export {addTask,getAllTasks,completeTask};
