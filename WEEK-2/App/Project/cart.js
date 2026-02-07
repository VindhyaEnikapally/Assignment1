import {getProductById,checkStock } from "./product.js";
let cartItems=[];
export function addToCart(productId,quantity) {
  const product=getProductById(productId);
  if (!product) return "Prod not found";
  if (!checkStock(productId,quantity))
    return "Not enough stock";
const existing=cartItems.find(i => i.productId === productId);
if (existing) {
    existing.qty+=quantity;
  } else {
    cartItems.push({productId,qty:quantity});
  }
  return "Added to cart";
}
export function removeFromCart(productId) {
  cartItems=cartItems.filter(i=>i.productId!==productId);
  return "Item removed";
}
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId,newQuantity))
    return "Not enough stock";
const item=cartItems.find(i=>i.productId===productId);
  if (item) {
    item.qty=newQuantity;
    return "Quantity updated";
  }
  return "Item not found";
}
export function getCartItems() {
  return cartItems.map(i=>{const product=getProductById(i.productId);
    return {...product,qty:i.qty};
  });
}
export function getCartTotal() {
  return getCartItems().reduce((sum,i)=>sum+i.price*i.qty,0);
}
export function clearCart() {
  cartItems=[];
}
