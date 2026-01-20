let hasPaid=true;
let hasCompletedBasics=false;
let enrollMess;
if (hasPaid==true && hasCompletedBasics==true) {
  enrollMess="Enroll Now";
} else {
  enrollMess="Complete Requirements";
}
console.log(enrollMess);
