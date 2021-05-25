import React, { useContext, useEffect } from "react";
import { fetchBaskets } from "../http/basketApi";
import { Context } from "../index";

const Basket = () => {
  const { basket } = useContext(Context);

 
 
  useEffect(() => {
    fetchBaskets().then((data) => {
        console.log(data);
    })
  }, []);

  
  
  

  return (
    <div>
      <div>
        Ваши товары:
        {basket.devices.map((dev) => (
          <div key={Math.random()}>{dev}</div>
        ))}
      </div>
      <div>Количество: {basket.quantity}</div>
      <div>Цена: {basket.price}</div>
    </div>
  );
};

export default Basket;
