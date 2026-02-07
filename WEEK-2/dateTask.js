let now=new Date(); //current date obj
let year=now.getFullYear();
let month=now.getMonth()+1; //jan=0,so adding 1
let date=now.getDate();
let day=now.getDay();
let hours=now.getHours();
let minutes=now.getMinutes();
let seconds=now.getSeconds();
console.log("Year:",year); //display
console.log("Month:",month);
console.log("Date:",date);
console.log("Day:",day);
console.log("Hours:",hours);
console.log("Minutes:",minutes);
console.log("Seconds:",seconds);
let formatted=date+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds; //display in DD-MM-YYYY HH:mm:ss format.
console.log("Formatted Date:",formatted);
