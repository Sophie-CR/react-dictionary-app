import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response);
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
