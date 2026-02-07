let enrollmentDeadline=new Date("2026-01-20");
let today=new Date();
//check before/after deadline
if (today<enrollmentDeadline) {
    console.log("Enrollment Opened");
} else {
    console.log("Enrollment Closed");
}

//validate user inp date
let userInp="2026-02-10";
let inpDate=new Date(userInp);
//check validity
if (isNaN(inpDate.getTime())) {
    console.log("Invalid");
} else {
    console.log("Valid",inpDate);
}
