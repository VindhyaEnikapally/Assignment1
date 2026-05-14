const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// 1. IT employees
const itEmployees=employees.filter(e => e.department === "IT");
console.log(itEmployees);
// 2. Add bonus
const updatedSalary=employees.map(e => ({...e,netSalary: e.salary + e.salary * 0.10}));
console.log(updatedSalary);
// 3. Total payout
const totalSalary=employees.reduce((sum, e) => sum + e.salary, 0);
console.log(totalSalary);
// 4. Find salary 30000
console.log(employees.find(e => e.salary === 30000));
// 5. Index of Neha
console.log(employees.findIndex(e => e.name === "Neha"));
