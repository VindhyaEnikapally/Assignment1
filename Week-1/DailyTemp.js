const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1
let res=temperatures.filter(temp=>temp>35);
console.log(res);
//2
let res3=temperatures.map(element=>(element+1.8)*32)
console.log(res3)
//3
const avgTemp=temperatures.reduce((acc,temp) =>acc+temp, 0)/temperatures.length;
console.log(avgTemp); 
//4
const res1=temperatures.find(temp =>temp>40);
console.log(res1); 
//5
const res2=temperatures.findIndex(temp =>temp===28);
console.log(res2); 