import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }
  return (
    <div className="dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleSearchTerm} />
        <input type="submit" className="btn btn-primary" value="🔍 Search" />
      </form>
    </div>
  );
}
