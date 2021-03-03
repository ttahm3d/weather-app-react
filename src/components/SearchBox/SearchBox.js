import React, { useState } from "react";
import "../../styles/SearchBox.scss";

const SearchBox = ({ setLocation }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(input);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Location"
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="🔍" />
    </form>
  );
};

export default SearchBox;
