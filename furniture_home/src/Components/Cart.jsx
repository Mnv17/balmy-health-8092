import { useState, useEffect } from "react";
import { Navbar } from '../Components/navbar';
import { Footer } from '../Components/footer';
import "./Cart.css";

export function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=> {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleIncreaseQuantity = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item) => item.quantity > 0);
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
        return total + item.price.replace(",","") * item.quantity;
    }, 0);
  };

  useEffect(() => {
    const totalPrice = getTotalPrice();
    localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
  }, [cartItems]);

  return (
    <>
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1>It's Your Furniture</h1>
        <hr />
        {cartItems.length === 0 ? (
          <p>Oops You haven't selected anything ..</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="cart-img" src={item.url} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="item-price">{item.price}</p>
                  <div className="quantity-controls">
                    <button className="cart-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <p >{item.quantity}</p>
                    <button className="cart-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                      disabled={item.quantity === item.maxQuantity}
                    >
                      +
                      </button>
                  </div>
                  <p className="price">Price: {Number(item.price.replace(",","")) * item.quantity}</p>
                  <button className="remove" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            
          </div>
          
        )}
      </div>
      <div className="cart-total">
          <p>Total: {getTotalPrice().toFixed(2)}</p>
        </div>
       
      <Footer style={{marginTop:"150px"}} />
    </div>
    </>
  );
}



