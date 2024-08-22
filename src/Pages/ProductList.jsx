import ProductCard from "../Components/ProductCard";

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} nodetails />
      ))}
    </ul>
  );
}
