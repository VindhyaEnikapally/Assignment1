let enrollDeadline=new Date("2026-01-20"); //given deadline
let today=new Date();
if(today<enrollDeadline) { //checking enrollment status
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}
let inpDate="2026-02-30"; //date validation
let checkDate=new Date(inpDate);
if(checkDate.toString()==="Invalid Date") {
  console.log("Invalid Date");
} else {
  console.log("Valid Date");
}
