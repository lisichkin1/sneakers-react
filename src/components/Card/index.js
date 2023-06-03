import React, { useState } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
function Card({
  onClickLikeAdd,
  id,
  imageURL,
  title,
  price,
  onClickPlusAdd,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavourite, setIsFavourite] = useState(favorited);
  const onClickPlus = () => {
    onClickPlusAdd({ id, title, price, imageURL });
    setIsAdded(!isAdded);
  };

  const onClickFavourite = () => {
    onClickLikeAdd({ id, title, price, imageURL });
    setIsFavourite(!isFavourite);
  };
  return (
    <div className={styles.card + " w-56 p-8 rounded-[40px]"}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={240}
          viewBox="0 0 150 240"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="20" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="150" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="175" rx="5" ry="5" width="90" height="15" />
          <rect x="0" y="205" rx="5" ry="5" width="80" height="25" />
          <rect x="120" y="205" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.likeCard}>
            <button className={styles.ButtonCard} onClick={onClickFavourite}>
              <img
                width={16}
                height={16}
                src={isFavourite ? "/img/red-heart.svg" : "/img/heart.svg"}
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
            <div className={styles.CardPrice + " flex flex-col"}>
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            <button
              className={
                isAdded
                  ? styles.ButtonCard + " " + styles.ButtonCardPlus
                  : styles.ButtonCard
              }
              onClick={onClickPlus}
            >
              <img
                width={11}
                height={11}
                src={isAdded ? "img/enter-cart.svg" : "/img/plus.svg"}
                alt="plus button"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
