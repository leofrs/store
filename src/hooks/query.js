import { useState } from "react";

export default function Query() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return { query, handleInputChange };
}
