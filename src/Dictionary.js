import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  return (
    <div className="dictionary mb-3">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleSearchTerm} />
        <input type="submit" className="btn btn-primary" value="🔍 Search" />
      </form>
      <Results data={results} />
    </div>
  );
}
