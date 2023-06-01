import Card from "../components/Card"

function Favorites ({sneakersItems, onAddToFavourites}) {
    return(
        
        <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
          {sneakersItems.map((obj) => (
            <Card 
            key = {obj.id}
            favorited = {true}
            onClickLikeAdd = {onAddToFavourites}
            {...obj}
            />
          ))}
        </div>
      
    )
}

export default Favorites