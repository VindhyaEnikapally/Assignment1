let dob=new Date("2006-03-06");
let tdy=new Date();
let age=tdy.getFullYear()-dob.getFullYear();
//adj if bday hasn’t occurred yet this yr
let hasBirthdayPassed= 
    (tdy.getMonth()>dob.getMonth()) || //if curr month is after birth month
    (tdy.getMonth()===dob.getMonth() && tdy.getDate()>=dob.getDate()); //or same month but day has passed
//if not passed subtract one yr
if (!hasBirthdayPassed) {
    age--;
}
console.log(age);
