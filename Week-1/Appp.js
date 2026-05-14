import {validateTitle,validatePriority,validateDueDate} from "./validator.js";
const tasks=[]; //store all tasks
function addTask(title,priority,dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid pri";
  if (!validateDueDate(dueDate)) return "Invalid due date";
  const newTask={
    id:tasks.length+1,
    title,
    priority,
    dueDate,
    completed: false
  };
  tasks.push(newTask);
  return "Task added";
}
function getAllTasks() {
  return tasks;
}
function completeTask(taskId) {
  const task=tasks.find(t=>t.id===taskId);
  if (task) {
    task.completed=true;
    return "Task complete";
  }
  return "Task not found";
}
export {addTask,getAllTasks,completeTask};

//validator,appp,Task should be in one folder
