import {reduceStock} from "./product.js";
import {getCartItems,getCartTotal,clearCart} from "./cart.js";
import {applyDiscount} from "./discount.js";
export function validatePaymentMethod(method) {
  return ["card","upi","cod"].includes(method);
}
export function processPayment(method,couponCode=null) {
    if (!validatePaymentMethod(method))
    return {status:"failed",message:"Invalid payment method"};
const items=getCartItems();
const subtotal=getCartTotal();
const discountInfo=applyDiscount(subtotal,couponCode,items);
items.forEach(i=>reduceStock(i.id,i.qty));
  clearCart();
  return {
    orderId:"ORD"+Date.now(),
    items,
    subtotal,
    discount:discountInfo.discount,
    total:discountInfo.finalTotal,
    paymentMethod:method,
    status:"success",
    message:discountInfo.message
  };
}
