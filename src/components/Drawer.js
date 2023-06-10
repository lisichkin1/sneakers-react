import React, { useState } from "react";
import Info from "./Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onCloseCart, sneakersItems = [], onDelete }) {
  const {cartSneakersItems, setCartSetSneakersItems, totalPrice} = useCart()
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post("https://646f20f609ff19b12086a2ff.mockapi.io/orders", {items:cartSneakersItems})
      setOrderId(data.id)
      setOrderComplete(true)
      setCartSetSneakersItems([])
      for (let i = 0; i < cartSneakersItems.length; i++) {
        const item = cartSneakersItems[i];
        console.log(cartSneakersItems)
        console.log(item)
        await axios.delete(`https://6423141677e7062b3e2a7b39.mockapi.io/cart/${i+1}`)
        await delay(1000)
        
      }
      
    } catch (error) {
      alert("ошибка при создании заказа")
    }
    setIsLoading(false)

  }

  return (
    <div className="drawer-container absolute top-0 left-0 z-10 w-full h-full">
      <div className="drawer flex flex-col absolute w-[420px] h-full right-0 p-8 gap-y-8 ">
        <div className="TitleCart">
          <h3>Корзина</h3>
          <button className="ButtonCardDelete" onClick={onCloseCart}>
            <img
              width={11}
              height={11}
              src="/img/plus.svg"
              alt="plus button"
            ></img>
          </button>
        </div>
        {sneakersItems.length > 0 ? (
          <div className="flex flex-col  h-full">
            <div className="CartList flex flex-col items-center justify-start gap-y-8 ">
              {sneakersItems.map((obj) => (
                <div className="CartItem">
                  <img
                    className="CartSneakerItem"
                    width={70}
                    height={70}
                    src={obj.imageURL}
                    alt="sneakers"
                  ></img>
                  <div className="ItemDescription">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <div className="ButtonDelete">
                    <button
                      className="ButtonCardDelete"
                      onClick={() => onDelete(obj.id)}
                    >
                      <img
                        width={11}
                        height={11}
                        src="/img/plus.svg"
                        alt="plus button"
                      ></img>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="PriceList">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="GreenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>
              </button>
            </div>
          </div>
        ) : (<Info 
                title={orderComplete ? "Заказ оформлен!" : "Корзина пустая" }
                description={
                  orderComplete ? 
                  `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 
                  "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                 }
                image={orderComplete ? "/img/infocart.png" : "/img/box.png"}
              />)}
      </div>
    </div>
  );
}

export default Drawer;
