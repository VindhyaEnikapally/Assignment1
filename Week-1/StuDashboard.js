const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
// 1.Passed students
const passedStudents=students.filter(s => s.marks >= 40);
console.log(passedStudents);
// 2.Add grade
const gradedStudents=students.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";

  return { ...s, grade };
});
console.log(gradedStudents);
// 3. Average marks
const avgMarks=students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(avgMarks);
// 4. Find student with 92
console.log(students.find(s => s.marks === 92));
// 5. Find index of Kiran
console.log(students.findIndex(s => s.name === "Kiran"));
