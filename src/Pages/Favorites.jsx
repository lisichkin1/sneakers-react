import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const {Favourites, onAddToFavourites, onAddToCart} = useContext(AppContext);
  return (
    <div className="content">
      <h3 className="mb-10">Мои закладки</h3>
      <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
        {Favourites.map((obj) => (
          <Card
            key={obj.id}
            favorited={true}
            onClickPlusAdd={(item) => onAddToCart(item)}
            onClickLikeAdd={(item) => onAddToFavourites(item)}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
