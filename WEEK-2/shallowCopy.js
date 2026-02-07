const user={  //given
  id:101,
  name:"Ravi",
  preferences:{
    theme:"dark",
    language:"en"
  }
};
const userCopy={ ...user }; //shallow copy creation
userCopy.name="Rahul"; //changing name
userCopy.preferences.theme="light"; //changing theme
console.log("Org User:",user);
console.log("Copyd User:",userCopy);
