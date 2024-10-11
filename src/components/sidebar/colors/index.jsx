import Input from "../../input/index";
import "../../../styles/colors.css";

// eslint-disable-next-line react/prop-types
const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Cores</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          Todas as cores
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Preto"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Azul"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Vermelho"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Verde"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span className="checkmark"></span>
          Branco
        </label>
      </div>
    </>
  );
};

export default Colors;
