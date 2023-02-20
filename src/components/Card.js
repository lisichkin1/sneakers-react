import React from "react";

function Card() {
  return (
    <div className="card w-56 p-8 rounded-[40px]">
      <div className="likeCard">
        <button className="ButtonCard">
          <img
            width={16}
            height={16}
            src="/img/heart.svg"
            alt="plus button"
          ></img>
        </button>
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/image3.jpg"
        alt="sneakers"
      ></img>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="ButtonCard">
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="plus button"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
