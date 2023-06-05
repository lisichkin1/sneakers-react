import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({title, image, description}) => {
    const {setCartOpen} =useContext(AppContext)
  return (
    <div className="flex flex-col items-center justify-center m-auto gap-y-4">
      <img
        className="ddd"
        width={120}
        height={120}
        src={image}
        alt="box logo"
      />
      <h3 className="text-2xl leading-6 text-center text-black font-bold">
        {title}
      </h3>
      <p className="font-normal text-base leading-6 text-center text-black opacity-40">
        {description}
      </p>
      <button className="GreenButton ReturnButton" onClick={() => setCartOpen(false)}>
        Вернуться назад
        <img src="/img/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Info;
