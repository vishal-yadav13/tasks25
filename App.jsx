import { useState } from "react";
import Shoes from "./components/Shoes";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 4500,
      image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-DM0029-123_1.jpg?rnd=20200526195200&tr=w-1536"
    },
    {
      id: 2,
      name: "Adidas Run",
      price: 3800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJn-2GSRzwZzrlFaCFjIfgf28UZrop7aVjYA&s"
    },
    {
      id: 3,
      name: "Puma Sport",
      price: 3200,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300"
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: 4100,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300"
    }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(shoe) {
    const item = cart.find((data) => data.id === shoe.id);

    if (item) {
      const updatedCart = cart.map((data) => {
        if (data.id === shoe.id) {
          return {
            ...data,
            quantity: data.quantity + 1
          };
        }
        return data;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  let total = 0;

  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <div className="container">
      <Shoes shoes={shoes} addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
      />
    </div>
  );
}

export default App;