import { createContext, useState } from "react";
import { Product } from "../pages/shop/Product";

export const MyContext = createContext()

export const MyProvider = (props) => {
  const [cartItemCounter, setcartItemCounter] = useState(0)
  return (
    <>
      <MyContext.Provider value={{
        cartItemCounter: cartItemCounter,
        setcartItemCounter: setcartItemCounter
      }}>
        {props.children}
      </MyContext.Provider>
    </>
  )
}
 
