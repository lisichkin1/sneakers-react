import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [sneakersItems, setSneakersItems] = useState([])
  const [cartSneakersItems, setCartSetSneakersItems] = useState([])
  const [Favourites, setFavourites] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [seacrValue, setSearchValue] = useState('')
  useEffect(() => {
    axios.get('https://6423141677e7062b3e2a7b39.mockapi.io/items').then(res => {
      setSneakersItems(res.data)
    })
    axios.get('https://6423141677e7062b3e2a7b39.mockapi.io/cart').then(res => {
      setCartSetSneakersItems(res.data)
    })
  }, [])

  const onAddToCart = (item) => {
    axios.post('https://6423141677e7062b3e2a7b39.mockapi.io/cart', item);
    setCartSetSneakersItems(prev => [...prev, item])
  }

  const onDeleteItem = (id) => {
    axios.delete(`https://6423141677e7062b3e2a7b39.mockapi.io/cart/${id}`);
    setCartSetSneakersItems(prev => prev.filter(item => item.id !== id))
  }

  const onEditSearchInput = (event) =>{
    setSearchValue(event.target.value);
  }

  const onAddToFavourites = (item) => {
    axios.post('https://646f20f609ff19b12086a2ff.mockapi.io/Favourites', item);
    setFavourites(prev => [...prev, item])
  }
  
  return (
    <div className="wrapper mx-auto mt-12 max-w-7xl box-border outline-none">
      {cartOpen && <Drawer sneakersItems = {cartSneakersItems} onCloseCart = {()=> setCartOpen(false)} onDelete = {onDeleteItem}/>}
      <Header onClickCart = {()=> setCartOpen(true)}/>
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
          .filter((obj)=>obj.name.toUpperCase().includes(seacrValue.toUpperCase()))
          .map((obj) => (
            <Card 
            key = {obj.id}
            title = {obj.name}
            price = {obj.price}
            imageURL = {obj.imageURL}
            onClickPlusAdd={(item)=>onAddToCart(item)}
            onClickLikeAdd = {(item)=>onAddToFavourites(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
