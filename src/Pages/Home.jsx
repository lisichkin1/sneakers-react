import Card from "../components/Card"

function Home ({
  sneakersItems,
  seacrValue,
  setSearchValue,
  onEditSearchInput,
  onAddToCart,
  onAddToFavourites
}) {
    return(
        <div className="content">
        <div className="flex items-center mb-10 justify-between">
          <h3>{seacrValue ? `Поиск по: ${seacrValue}`: 'Все кроссовки'}</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"></img>
            {
            seacrValue && (<button className="ButtonCardDelete clear" onClick={() => setSearchValue('')}>
            <img
              width={11}
              height={11}
              src="/img/plus.svg"
              alt="plus button"
            ></img>
            </button>)
            }
            <input onChange={onEditSearchInput} value={seacrValue} placeholder="Поиск... "></input>
          </div>
        </div>
        <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
          {sneakersItems
          .filter((obj)=>obj.title.toUpperCase().includes(seacrValue.toUpperCase()))
          .map((obj) => (
            <Card 
            key = {obj.id}
            onClickPlusAdd={(item)=>onAddToCart(item)}
            onClickLikeAdd = {(item)=>onAddToFavourites(item)}
            {...obj}
            />
          ))}
        </div>
      </div>
    )
}

export default Home