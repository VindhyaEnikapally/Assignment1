import { addTask, getAllTasks, completeTask } from "./task.js";
console.log(addTask("Study JS", "high", "2026-02-10")); 
console.log(addTask("Do Project", "medium", "2026-03-01"));
console.log("All Tasks:", getAllTasks());
console.log(completeTask(1));
console.log("After Completion:", getAllTasks());

