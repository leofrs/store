import "../../styles/product.css";

// eslint-disable-next-line react/prop-types
const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
