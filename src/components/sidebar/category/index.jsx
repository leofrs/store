import Input from "../../input/index";
import "../../../styles/category.css";

// eslint-disable-next-line react/prop-types
function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categorias</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todos
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Tênis Esporte"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Sandalhas"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Tênis Casual"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Saltos"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
