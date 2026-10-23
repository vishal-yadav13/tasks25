function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h4>{item.name}</h4>

              <p>Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;