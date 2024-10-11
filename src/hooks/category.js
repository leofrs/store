import { useState } from "react";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  return { selectedCategory, handleChange, handleClick };
}
