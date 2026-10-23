function Shoes({ shoes, addToCart }) {
  return (
    <div className="shoe-section">
      <h2>Available Shoes</h2>

      <div className="shoe-list">
        {shoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />

            <h3>{shoe.name}</h3>

            <p>Price: ₹{shoe.price}</p>

            <button onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shoes;