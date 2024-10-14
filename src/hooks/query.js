import { useState } from "react";

export default function QueryHook() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  return { query, handleInputChange };
}
