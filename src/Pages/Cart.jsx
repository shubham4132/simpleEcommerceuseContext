export default function Cart({ cart, handleDeleteCart }) {
  console.log("Cart:", cart); // Debugging line

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(({ id, name, price, description }) => (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <h2>
              {name}
              <small> INR {price}</small>
            </h2>
            <h3>{description}</h3>
            <button onClick={() => handleDeleteCart(id)}>Delete Item</button>
          </div>
        ))
      )}
    </div>
  );
}
