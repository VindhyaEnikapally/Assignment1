const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//Use filter() to get only inStock products
let res=cart.filter(item=>item.inStock===true)
console.log(res)
//Use map() to create a new array with:  { name, totalPrice }
let res1 = cart.map(item=>({name:item.name,totalPrice:item.price*item.quantity}));
console.log(res1)
//use reduce to calculate grand total cart value
let res2= cart.reduce((sum,item) => sum+item.price*item.quantity,0);
console.log(res2);
//Use find() to get details of "Mouse"
let res3=cart.find(item=>item.name==="Mouse")
console.log(res3)
//Use findIndex() to find the position of "Keyboard"
let res4=cart.findIndex(item=>item.name==="Keyboard")
console.log(res4)