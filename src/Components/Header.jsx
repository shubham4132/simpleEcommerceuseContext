import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>meKart</h1>
      <h2>Item in Cart</h2>
      <NavLink to="/">HOME</NavLink>||
      <NavLink to="/cart">Cart</NavLink>||
    </div>
  );
}
