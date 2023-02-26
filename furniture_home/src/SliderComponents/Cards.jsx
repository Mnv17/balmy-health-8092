import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from '../Components/navbar';
import { Footer } from '../Components/footer';


export function FurniturePage() {
  const [data, setData] = useState([])
  const [updatedtedData, setUpdatedtedData] = useState([]);
  useEffect(() => {
    loadFurnituresData()
  }, [])
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
    console.log("data", data);
    const updatedtedData = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url: e.url,
        price: e.price,
        rating: e.rating
      };
    });
    setUpdatedtedData(updatedtedData);
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="FirstDiv">
        <h2>All Furnitures</h2>
        <p>Perfect for the whole family to pile onto for game nights or for you to lounge on while binging your favorite TV shows, the sofa is that cozy piece of furniture that can truly bring any room to life. Available in so many exciting designs, shapes, and seating arrangements, the sofa design can be easily ... More</p>
      </div>
      <div className="filterdiv">
        <div>
          <select name="" id=""></select>
        </div>
        <div>

        </div>
      </div>

      <div className="furn-div">
        {updatedtedData.map((item) => (
          <div key={item.id} className="item">
            <img className="image" src={item.url} alt={item.name} />
            <p className="name">{item.name}</p>
            <p className="Price">Price: ₹{item.price}</p>
            <p className="ratings">Ratings: {item.rating}</p>
            <button className="add-to-cart-button">Add to Cart</button>           
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}