import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from '../Components/navbar';
import { Footer } from '../Components/footer';
import FilterProducts from "./filter";
import "./Cards.css";

export function FurniturePage() {
  const [data, setData] = useState([]);
  const [updatedtedData, setUpdatedtedData] = useState([]);
  const [filterTextValue, updateFilterTextValue] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadFurnituresData();
  }, []);

  const loadFurnituresData = async () => {
    try {
      const response = await axios.get(
        "https://dark-rose-greyhound-veil.cyclic.app/furnitures"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updatedtedData = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url: e.url,
        price: e.price,
        rating: e.rating,
        product: e.product
      };
    });
    setUpdatedtedData(updatedtedData);
  }, [data]);

  const filteredData = updatedtedData.filter((item) => {
    if (filterTextValue === 'all') {
      return true;
    }
    return item.product.toLowerCase() === filterTextValue.toLowerCase();
  });

  function onFilterValueSelected(value) {
    updateFilterTextValue(value);
  }

  function addToCart(item) {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (index >= 0) {
      updatedCartItems[index].quantity += 1;
    } else {
      updatedCartItems.push({
        id: item.id,
        name: item.name,
        url: item.url,
        price: item.price,
        quantity: 1
      });
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <>
      <Navbar />
      <div className="FirstDiv">
        <h2>All Furnitures</h2>
      </div>

      <FilterProducts filterValueSelected={onFilterValueSelected} />

      <div className="furn-div">
        {filteredData.map((item) => (
          <div key={item.id} className="item">
            <img className="image" src={item.url} alt={item.name} />
            <p className="name">{item.name}</p>
            <p className="Price">Price: ₹{item.price}</p>
            <p className="ratings">Ratings: {item.rating}</p>
            <p className="product">Type: {item.product}</p>
            <button className="cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
