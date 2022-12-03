import { useEffect, useState } from 'react';
import { discountRules } from '../Utils/discountRules';

export function useCart() {
    const [carts, setCarts] = useState([])
  const [porcentDiscount, setPorcentDiscount] = useState(0)


function handleAddToCart(item){
    setCarts((prevState) => {
      // Search the item in the array
      const isItemInTheCart = prevState.find((itemInCart) => itemInCart.id === item.id);
      if (isItemInTheCart) {
        return prevState.map((itemInCart) =>
          itemInCart.id === item.id ? { ...itemInCart, quantity: itemInCart.quantity + 1 } : itemInCart
        );
      }
      return [...prevState, { ...item, quantity: 1 }];
    });
  }

  const handleRemoveItemToCart = (id) => {
    setCarts((prevState) => {
      const foundCartItem = prevState.find((cartItem) => cartItem.id === id);
      if (foundCartItem) {
        if (foundCartItem.quantity === 1) {
          const newArray = prevState.filter((item) => item.id !== id);
          return newArray;
        } else {
          return prevState.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      } else {
        return prevState;
      }
    });
  };

    const handleAddQuantity = (id) => {
    setCarts((prevState) => {
      const foundCartItem = prevState.find((cartItem) => cartItem.id === id);
      if (foundCartItem) {
          return prevState.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
      } else {
        return prevState;
      }
    });
  };

  useEffect(()=>{
  const cartIds = carts.map(card => card.id).sort()
  discountRules.forEach(rule => {
       if( JSON.stringify(rule.m.sort()) === JSON.stringify(cartIds )){ 
       setPorcentDiscount(rule.discount)
     }
 });
},[carts])

   const getTotal = () => {
  const total =  carts.reduce((sum, i) =>  sum + i.quantity * i.price, 0 );
  if (porcentDiscount) { 
     const discount = total * porcentDiscount
     return total - discount
    }
  return total 
  }

    const getDiscount = () => {
    const total = carts.reduce((sum, i) => sum + i.quantity * i.price, 0);
    let discount = 0
    if (porcentDiscount > 0) { 
      discount = total * porcentDiscount
      return discount
    }
    return discount 
  }

  return {
    handleAddToCart,
    handleRemoveItemToCart,
    handleAddQuantity,
    carts,
    getTotal,
    getDiscount
  }
}
