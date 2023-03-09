import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arrItem = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageURL: "/img/sneakers/image1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 13999,
    imageURL: "/img/sneakers/image2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 11999,
    imageURL: "/img/sneakers/image3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageURL: "/img/sneakers/image4.jpg",
  },
  {
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 15499,
    imageURL: "/img/sneakers/image5.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageURL: "/img/sneakers/image6.jpg",
  },
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10899,
    imageURL: "/img/sneakers/image7.jpg",
  },
  {
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16799,
    imageURL: "/img/sneakers/image8.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13199,
    imageURL: "/img/sneakers/image9.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 10999,
    imageURL: "/img/sneakers/image10.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 7499,
    imageURL: "/img/sneakers/image4.jpg",
  },
  {
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 14399,
    imageURL: "/img/sneakers/image5.jpg",
  },
];

function App() {
  return (
    <div className="wrapper mx-auto mt-12 max-w-7xl box-border outline-none">
      <Drawer />
      <Header />
      <div className="content">
        <div className="flex items-center mb-10 justify-between">
          <h3>Все кроссовки</h3>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"></img>
            <input placeholder="Поиск... "></input>
          </div>
        </div>
        <div className="flex justify-start flex-wrap gap-x-[101px] gap-y-[40px]">
          {arrItem.map((obj) => (
            <Card 
            title = {obj.name}
            price = {obj.price}
            imageURL = {obj.imageURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
