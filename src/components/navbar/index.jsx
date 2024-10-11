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
    </nav>
  );
}

export default NavBar;
