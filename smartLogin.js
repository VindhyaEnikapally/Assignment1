let isLoggedIn=true;
let isProfileComplete=false;
let mess;
if (!isLoggedIn) {
  mess="Please login";
} else if (isLoggedIn && !isProfileComplete) {
  mess="Complete your profile";
} else {
  mess="Welcome back!";
}
console.log(message);
