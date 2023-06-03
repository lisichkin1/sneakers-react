import Card from "../components/Card";

function Favorites({ sneakersItems, onAddToFavourites }) {
  return (
    <div className="content">
      <h3 className="mb-10">Мои закладки</h3>
      <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
        {sneakersItems.map((obj) => (
          <Card
            key={obj.id}
            favorited={true}
            onClickLikeAdd={onAddToFavourites}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
