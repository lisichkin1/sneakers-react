import React, {useState} from "react";
import styles from './Card.module.scss'
function Card({onClickLikeAdd, imageURL, title, price, onClickPlusAdd}) {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () =>{
    onClickPlusAdd({title, price, imageURL})
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card + " w-56 p-8 rounded-[40px]"}>
      <div className={styles.likeCard}>
        <button className={styles.ButtonCard} onClick={onClickLikeAdd}>
          <img
            width={16}
            height={16}
            src="/img/heart.svg"
            alt="plus button"
          />
        </button>
      </div>
      <img
        className={styles.img_card}
        width={133}
        height={112}
        src={imageURL}
        alt="sneakers"
      />
      <h5>{title}</h5>
      <div className="flex justify-between items-center">
        <div className={styles.CardPrice +" flex flex-col"}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className={isAdded ? styles.ButtonCard + ' ' + styles.ButtonCardPlus : styles.ButtonCard} onClick={onClickPlus}>
          <img
            width={11}
            height={11}
            src={isAdded ? 'img/enter-cart.svg' : '/img/plus.svg'}
            alt="plus button"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
