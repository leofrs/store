import PropTypes from "prop-types";
import Card from "../card/index";
import Input from "../input";
import ProductsHook from "../../hooks/products";

import "../../styles/product.css";

const Products = () => {
  const { filteredProducts, searchTerm, setSearchTerm } = ProductsHook();
  return (
    <section>
      <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredProducts.length === 0 ? (
        <div className="card-container">
          <h1>Nenhum produto encontrado com esse nome.</h1>
        </div>
      ) : (
        <div className="card-container">
          {filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
              <Card
                key={Math.random()} // Recomendo usar uma chave única real
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

Products.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      star: PropTypes.string.isRequired,
      reviews: PropTypes.string.isRequired,
      prevPrice: PropTypes.string.isRequired,
      newPrice: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Products;
