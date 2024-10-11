import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "../../styles/navbar.css";

// eslint-disable-next-line react/prop-types
function NavBar({ query, handleInputChange }) {
  return (
    <nav>
      <div>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Faça a sua busca"
        />
      </div>

      <div>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
