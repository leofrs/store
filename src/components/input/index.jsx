import PropTypes from "prop-types";

import "../../styles/navbar.css";
export default function Input({ searchTerm, setSearchTerm }) {
  return (
    <nav>
      <input
        type="text"
        placeholder="Digite o nome do produto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
}

Input.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
