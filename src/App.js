import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Favorites from "./Pages/Favorites";
import { useEffect, useState } from "react";
import AppContext from "./context";
import Orders from "./Pages/Orders";

function App() {
  const [sneakersItems, setSneakersItems] = useState([]);
  const [cartSneakersItems, setCartSetSneakersItems] = useState([]);
  const [Favourites, setFavourites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [seacrValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const itemsResponse = await axios.get(
        "https://6423141677e7062b3e2a7b39.mockapi.io/items"
      );
      const cartResponse = await axios.get(
        "https://6423141677e7062b3e2a7b39.mockapi.io/cart"
      );
      const favoritesRespanse = await axios.get(
        "https://646f20f609ff19b12086a2ff.mockapi.io/Favourites"
      );
      setIsLoading(false)
      setCartSetSneakersItems(cartResponse.data);
      setFavourites(favoritesRespanse.data);
      setSneakersItems(itemsResponse.data);
    }
    fetchData();
  }, []);
  const onAddToCart = (item) => {
    if (cartSneakersItems.find((obj) => Number(obj.id) === Number(item.id))) {
      axios.delete(
        `https://6423141677e7062b3e2a7b39.mockapi.io/cart/${item.id}`
      );
      setCartSetSneakersItems((prev) =>
        prev.filter((cartItem) => Number(cartItem.id) !== Number(item.id))
      );
    } else {
      axios.post("https://6423141677e7062b3e2a7b39.mockapi.io/cart", item);
      setCartSetSneakersItems((prev) => [...prev, item]);
    }
  };

  const onDeleteItem = (id) => {
    axios.delete(`https://6423141677e7062b3e2a7b39.mockapi.io/cart/${id}`);
    setCartSetSneakersItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onEditSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavourites = async (item) => {
    try {
      if (Favourites.find((favItem) => Number(favItem.id) === Number(item.id))) {
        axios.delete(
          `https://646f20f609ff19b12086a2ff.mockapi.io/Favourites/${item.id}`
        );
        setFavourites((prev) => prev.filter((obj) => obj.id !== item.id));
      } else {
        const { data } = await axios.post(
          "https://646f20f609ff19b12086a2ff.mockapi.io/Favourites",
          item
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };
  const isAddedItem = (id) => {
    return cartSneakersItems.some(
      (item) => Number(item.id) === Number(id)
    )
  }
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  useEffect(() => {
    if (isOverflowHidden) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "16px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOverflowHidden]);

 
  return (
    <AppContext.Provider value={{sneakersItems, cartSneakersItems, Favourites, isAddedItem, onAddToFavourites, setCartOpen, setCartSetSneakersItems, onAddToCart, isLoading}}>
      <div className={ "wrapper mx-auto mt-12 max-w-7xl box-border outline-none"}>
      {cartOpen && (
        <Drawer
          sneakersItems={cartSneakersItems}
          onCloseCart={() => {
            setIsOverflowHidden(false);
            setCartOpen(false);
          }}
          onDelete={onDeleteItem}
        />
      )}

      <Header  onClickCart={() => {
        setIsOverflowHidden(true);
        setCartOpen(true);
      }} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartSneakersItems={cartSneakersItems}
              sneakersItems={sneakersItems}
              seacrValue={seacrValue}
              setSearchValue={setSearchValue}
              onEditSearchInput={onEditSearchInput}
              onAddToFavourites={onAddToFavourites}
              onAddToCart={onAddToCart}
              isLoading = {isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites/>
          }
        />
        <Route
          path="/orders"
          element={
            <Orders/>
          }
        />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
