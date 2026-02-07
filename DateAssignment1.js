//Create Date obj for curr date & time
let now = new Date();
//Extract details
let year=now.getFullYear();
let month=now.toLocaleString('default', { month: 'long' }); //converts month,weekday into readable words
let date=now.getDate();
let day=now.toLocaleString('default', { weekday: 'long' });
let hours=now.getHours();
let minutes=now.getMinutes();
let seconds=now.getSeconds();
console.log(year);
console.log(month);
console.log(date);
console.log(day);
console.log("Time:",hours+":"+minutes+":"+seconds);
//Display in DD-MM-YYYY HH:mm:ss format
let formatted =
    String(date).padStart(2,'0')+"-"  //padStart(2,"0") adds leading zero if a number has only one digit (5 → 05).
    + String(now.getMonth()+1).padStart(2,'0')+"-" // Month (JavaScript months start at 0, so +1), 2 digits
    + year+" "                            // Year (e.g. "2026")
    + String(hours).padStart(2,'0')+":"   // Hours,2 digits
    + String(minutes).padStart(2,'0')+":" // Minutes,2 digits
    + String(seconds).padStart(2,'0');    // Seconds,2 digits
console.log(formatted);
