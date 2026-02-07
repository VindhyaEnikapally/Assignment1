const order={ //given obj
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};
const orderCopy=JSON.parse(JSON.stringify(order)); //deep copy
orderCopy.customer.address.city="Bangalore"; //modifying copied obj
orderCopy.items[0].price=75000;
console.log("Org Order:",order);
console.log("Copied Order:",orderCopy);
