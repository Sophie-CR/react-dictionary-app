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
      <section>
        <h1>What would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            className="me-2"
            type="search"
            autoFocus={true}
            placeholder="Enter a word to search"
            onChange={handleSearchTerm}
          />
          <input className="mb-1 btn button" type="submit" value="🔍 Search" />
        </form>
      </section>
      <Results data={results} />
    </div>
  );
}
