const { createContext, useState } = require("react");

 export const CartContext = createContext();

 const CartContextProvider = ({children})=>{
   const [cartList, setCartList] = useState([]);
   const addToCart = (item, qty) =>{
      let productFind = cartList.find(product=> product.itemID === item.id);
      if(productFind===undefined){setCartList([
         ...cartList,
          {
             itemID: item.id,
             itemName: item.name,
             itemIMG: item.image,
             itemPrice: item.price,
             itemQty: qty,
          }
         ])} else {
            productFind.itemQty += qty;
         }
   }
   const removeItem = (id)=>{
      const remove = cartList.filter(item => item.itemID !== id);
      setCartList(remove);
   }
   const clearCartList = ()=>{
      setCartList([]);
   }
   const totalItem = (itemID)=>{
      let index = cartList.map(item => item.itemID).indexOf(itemID);
      return cartList[index].itemPrice * cartList[index].itemQty
   }
   const subTotal = () =>{
      let totalesItems = cartList.map(item => totalItem(item.itemID));
      return totalesItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
   }

   const IVA = () =>{
      return subTotal() * 0.21
   }

   const totalToPay = () =>{
      return subTotal() + IVA()
   }
   
   const itemsQty = () => {
      let qtys = cartList.map(item => item.itemQty);
      return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
   }
   
     return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCartList, totalItem, subTotal, IVA, totalToPay, itemsQty }}>
        { children }
        </CartContext.Provider>
     );
 }
 export default CartContextProvider;
