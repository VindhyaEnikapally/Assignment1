function validateTitle(title) { //validate task title (with min 3-chars)
  return title && title.length>=3;
}
function validatePriority(priority) { //validate priority
  return ["low","medium","high"].includes(priority);
}
function validateDueDate(date) { //validate due date (a future date)
  return new Date(date)>new Date();
}
export {validateTitle,validatePriority,validateDueDate };
