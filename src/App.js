import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {
  const [sneakersItems, setSneakersItems] = useState([])
  const [cartSneakersItems, setCartSetSneakersItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  useEffect(() => {
    fetch('https://6423141677e7062b3e2a7b39.mockapi.io/items')
    .then((res) =>{
      return res.json();
    })
    .then((json) => {
      setSneakersItems(json)
    });
  }, [])

  const onAddToCart = (item) => {
    setCartSetSneakersItems(prev => [...prev, item])
  }
  
  return (
    <div className="wrapper mx-auto mt-12 max-w-7xl box-border outline-none">
      {cartOpen && <Drawer sneakersItems = {cartSneakersItems} onCloseCart = {()=> setCartOpen(false)}/>}
      <Header onClickCart = {()=> setCartOpen(true)}/>
      <div className="content">
        <div className="flex items-center mb-10 justify-between">
          <h3>Все кроссовки</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"></img>
            <input placeholder="Поиск... "></input>
          </div>
        </div>
        <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
          {sneakersItems.map((obj) => (
            <Card 
            title = {obj.name}
            price = {obj.price}
            imageURL = {obj.imageURL}
            onClickPlusAdd={(item)=>onAddToCart(item)}
            onClickLikeAdd = {()=>console.log('Добавили в избранное')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
