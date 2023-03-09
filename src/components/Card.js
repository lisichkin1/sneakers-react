import React from "react";

function Card(props) {
  const onClickCard = () => {
    alert(props.price)
  }
  return (
    <div className="card w-56 p-8 rounded-[40px]">
      <div className="likeCard">
        <button className="ButtonCard">
          <img
            width={16}
            height={16}
            src="/img/heart.svg"
            alt="plus button"
          />
        </button>
      </div>
      <img
        width={133}
        height={112}
        src={props.imageURL}
        alt="sneakers"
      />
      <h5>{props.title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="ButtonCard" onClick={onClickCard}>
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="plus button"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
