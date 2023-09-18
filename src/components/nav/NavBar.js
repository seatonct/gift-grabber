import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar_item">
        <Link className="navbar_link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar_item">
        <Link className="navbar_link" to="/newWishList">
          New Wish List
        </Link>
      </li>
      <li className="navbar_item">
        <Link className="navbar_link" to="/myLists">
          My Wish Lists
        </Link>
      </li>
    </ul>
  );
};