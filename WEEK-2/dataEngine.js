const users=[
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
const courses=[
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
//MOD-1: User Processing Engine
const actUsers=users.filter(u=>u.active); //active users
console.log(actUsers);
const actNames=actUsers.map(u=>u.name); //names of active users
console.log(actNames);
const hasAdmin=users.some(u=>u.role==="admin"); //checking if any admin exist
console.log(hasAdmin);
const findUser=users.find(u=>u.id===2); //finding user by id
console.log(findUser);
const updUsers=users.map(u=>u.id===1 ? {...u,active:false}:u); //if id-1,copy user & make active false
console.log(updUsers);
//MOD-2: Course Catalog Engine
const pubCourses=courses.filter(c=>c.published); //published courses
console.log(pubCourses);
const sortCourses=[...courses].sort((a,b)=>b.price-a.price); //makes copy of courses sorts from high price-low
console.log(sortCourses);
const shortCourses=courses.map(c=>({title:c.title,price:c.price})); //title & price
console.log(shortCourses);
const totalVal= pubCourses.reduce((sum,c)=>sum+c.price,0); //total val of pub courses
console.log(totalVal);
const newCourses=[...courses,{id:104,title:"Python",price:999,published:true}];
console.log(newCourses);
//MOD-3: Shopping Cart Engine
const detailCart=cart.map(item=>{const course=courses.find(c=>c.id===item.courseId);
  return{...course,qty:item.qty};
});
console.log(detailCart);
const cartTotal=detailCart.reduce((sum,item)=>sum+item.price*item.qty,0); //total cart amount
console.log(cartTotal);
const incrCart=cart.map(i=>i.courseId===101?{...i,qty:i.qty+1}:i); //incr qty imm
console.log(incrCart);
const remCart=cart.filter(i=>i.courseId !== 103); //removing course from cart
console.log(remCart);
const allPaid=detailCart.every(item=>item.price > 0); //check if all items are paid
console.log(allPaid);
//MOD-4: Role & Permission Engine
const roleNames=Object.keys(roles); //getting role names
console.log(roleNames);
const canDel=roles.student.includes("delete"); //student del
console.log(canDel);
const allPermissions = Object.values(roles).flat(); //unq permission list
const unqPer=[...new Set(allPermissions)];
console.log(unqPer);
const newRoles={...roles,moderator:["view","update"]}; //adding moderator role
console.log(newRoles);





