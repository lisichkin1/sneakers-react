import React from "react";

function Drawer() {
  return (
    <div
      style={{ display: "none" }}
      className="drawer-container absolute top-0 left-0 z-10 w-full h-full"
    >
      <div className="drawer flex flex-col absolute w-[420px] h-full right-0 p-8 gap-y-8">
        <div className="TitleCart">
          <h3>Корзина</h3>
          <button className="ButtonCardDelete">
            <img
              width={11}
              height={11}
              src="/img/plus.svg"
              alt="plus button"
            ></img>
          </button>
        </div>
        <div className="CartList flex flex-col items-center justify-start gap-y-8 ">
          <div className="CartItem">
            <img
              className="CartSneakerItem"
              width={70}
              height={70}
              src="/img/sneakers/image5.jpg"
              alt="sneakers"
            ></img>
            <div className="ItemDescription">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <div className="ButtonDelete">
              <button className="ButtonCardDelete">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus button"
                ></img>
              </button>
            </div>
          </div>
          <div className="CartItem">
            <img
              className="CartSneakerItem"
              width={70}
              height={70}
              src="/img/sneakers/image5.jpg"
              alt="sneakers"
            ></img>
            <div className="ItemDescription">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <div className="ButtonDelete">
              <button className="ButtonCardDelete">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="plus button"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="PriceList">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="GreenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
