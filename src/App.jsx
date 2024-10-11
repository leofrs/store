import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar/index";
import Products from "./components/product/index";
import Card from "./components/card/index";

import Query from "./hooks/query";
import Category from "./hooks/category";

import products from "./db/index";

function App() {
  const { query, handleInputChange } = Query();
  const { selectedCategory, handleChange } = Category();

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <NavBar query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default App;
