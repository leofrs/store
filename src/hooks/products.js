import { useState } from "react";
import products from "../db/index.js";

export default function ProductsHook() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(({ title }) => {
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return { filteredProducts, searchTerm, setSearchTerm };
}
