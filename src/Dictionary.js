import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  function searchDefinitions(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleDictionaryResponse);
  }
  function handleDictionaryResponse(response) {
    if (response.data) {
      setResults(response.data[0]);
      searchImages();
    } else {
      alert(
        "Sorry, that word is not recognised. Please check the spelling and try again."
      );
    }
  }
  function searchImages() {
    const pexelsApiKey =
      "563492ad6f917000010000014473ccdcb0a04c2b8fd9d0a62da00e8c";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=6`;
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }
  function handlePexelsResponse(response) {
    if (response.data) {
      setPhotos(response.data.photos);
    } else {
      return null;
    }
  }
  return (
    <div className="dictionary mb-3">
      <section>
        <h1>What would you like to look up?</h1>
        <form onSubmit={searchDefinitions}>
          <input
            className="search-field"
            type="search"
            autoFocus={true}
            placeholder="Enter a word to search"
            onChange={handleSearchTerm}
          />
          <input
            className="mb-1 btn button search-button"
            type="submit"
            value="🔍 Search"
          />
        </form>
      </section>
      <Results data={results} />
      <Photos data={photos} />
    </div>
  );
}
