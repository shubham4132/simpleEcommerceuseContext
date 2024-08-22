import { Link } from "react-router-dom";

export default function ProductCard({ product, nodetails, handleAddCart }) {
  console.log("Product:", product);
  if (!product) {
    return <div>No product data available</div>;
  }
  const { id, name, price, description } = product;
  return (
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
      <div>{nodetails && <Link to={`/product/${id}`}>View Details</Link>}</div>
      <div>{!nodetails && <p>{description}</p>}</div>
      <div>
        {!nodetails && (
          <button onClick={() => handleAddCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}
