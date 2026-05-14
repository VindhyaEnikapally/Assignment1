function validateTitle(title) {
  return typeof title==="string" && title.trim().length >= 3;
}
function validatePriority(priority) {
  return ["low","medium","high"].includes(priority);
}
function validateDueDate(date) {
  const due=new Date(date);
  const now=new Date();
  return due>now; // must be in the future
}
// Export functions
export { validateTitle, validatePriority, validateDueDate };
