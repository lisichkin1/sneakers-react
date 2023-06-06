import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const {Favourites, onAddToFavourites} = useContext(AppContext);
  return (
    <div className="content">
      
    </div>
  );
}

export default Orders;
