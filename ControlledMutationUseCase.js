const user = {
  id:101,
  name:"Ravi",
  preferences: {
    theme:"dark",
    language:"en"
  }
};
//create a shallow copy manually (copy only id,name)
const userCopy = {
  id:user.id,
  name:user.name,
  preferences:user.preferences
};
//change val's in the copied obj
userCopy.name ="Kiran";                //changing name
userCopy.preferences.theme ="light";   //changing theme in pref
console.log("Org User:",user);
console.log("Cpd User:",userCopy);