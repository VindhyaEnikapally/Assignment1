const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//1.Total marks
const total=Object.values(marks).reduce((a,b)=>a+b,0);
console.log(total);
//2.Average
console.log(total/Object.keys(marks).length);
//3.Highest subject
let highestSubject="";
let highestMarks=0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks=marks[subject];
    highestSubject=subject;
  }
}
console.log(highestSubject);
//4.Add computer
marks.computer=90;
console.log(marks);
