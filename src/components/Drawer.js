import React from "react";

function Drawer({onCloseCart, sneakersItems = [], onDelete}) {

  return (
    <div
      className="drawer-container absolute top-0 left-0 z-10 w-full h-full"
    >
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
            {sneakersItems.map((obj)=>(
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
                <button className="ButtonCardDelete" onClick={()=>onDelete(obj.id)}>
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
         ):(
        <div className="flex flex-col items-center justify-center m-auto gap-y-4">
          <img
            className="ddd"
            width={120}
            height={120}
            src="/img/box.png"
            alt="box logo"
          />
          <h3 className="text-2xl leading-6 text-center text-black font-bold">
            Корзина пустая
          </h3>
          <p className="font-normal text-base leading-6 text-center text-black opacity-40">
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </p>
          <button className="GreenButton ReturnButton">
            Вернуться назад<img src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
        )}
  {/*
         <div className="CartList flex flex-col items-center justify-start gap-y-8 ">
          {sneakersItems.map((obj)=>(
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
               <button className="ButtonCardDelete" onClick={()=>onDelete(obj.id)}>
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
      */}
      </div>
    </div>
  );
}

export default Drawer;
