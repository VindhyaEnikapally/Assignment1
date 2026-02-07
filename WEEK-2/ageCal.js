let dob="2000-05-15"; //dob as inp
let birthDate=new Date(dob); //converting str to date obj
let today=new Date();
let age=today.getFullYear()-birthDate.getFullYear();
if(today.getMonth()<birthDate.getMonth()||(today.getMonth()===birthDate.getMonth()&&
   today.getDate() < birthDate.getDate())) {
  age--;
} //if bday didn't complete this yr
console.log(age);
