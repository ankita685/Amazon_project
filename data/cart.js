 export const cart =[];

 export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productID) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  }