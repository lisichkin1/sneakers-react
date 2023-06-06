import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { isLoading, onAddToFavourites, onAddToCart } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://646f20f609ff19b12086a2ff.mockapi.io/orders"
      );
      setOrders(data);
      console.log(orders);
    })();
  }, []);
  return (
    <div className="content">
      <h3 className="mb-10">Мои заказы</h3>
      <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px] flex-col">
        {orders.map((obj) => (
          <div className="flex justify-start flex-col">
            <h3 className="text-lg mb-4">Заказ #{obj.id}</h3>
            <div className="flex justify-start gap-x-[100px] gap-y-[40px] flex-wrap">
            {obj.items.map((ArrObj) => (
              <Card
                key={ArrObj.id}
                onClickPlusAdd={(item) => onAddToCart(item)}
                onClickLikeAdd={(item) => onAddToFavourites(item)}
                loading={isLoading}
                {...ArrObj}
              />
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
