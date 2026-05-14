const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// 1.Print name & email
console.log(user.name, user.email);
// 2.Add lastLogin
user.lastLogin="2026-10-01";
// 3.Update role
user.role="admin";
// 4.Delete isActive
delete user.isActive;
// 5.List keys
console.log(Object.keys(user));
