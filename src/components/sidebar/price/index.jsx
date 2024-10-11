import Input from "../../input/index";
import "../../../styles/price.css";

// eslint-disable-next-line react/prop-types
const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Preço</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Todos
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="R$ 0 - R$ 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="R$ 50 - R$ 100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="R$ 100 - R$ 150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Acima - $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
