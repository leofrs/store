import Category from "./category/index";
import Price from "./price/index";
import Colors from "./colors/index";

import "../../styles/sidebar.css";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
