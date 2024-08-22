import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { products } from "../data/ProductDB";
import ProductCard from "../Components/ProductCard";
export default function ProductDetails({ handleAddCart }) {
  const { productId } = useParams();
  function getProductDetails(products, productId) {
    const id = parseInt(productId, 10);
    return products.find((product) => product.id === id);
  }
  const product = getProductDetails(products, productId);
  console.log(product);
  return (
    <>
      <ProductCard product={product} handleAddCart={handleAddCart} />
      <Link to="/"> See All </Link>
    </>
  );
}
