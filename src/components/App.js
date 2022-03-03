import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const baseURL = "http://localhost:6001/listings"

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(setListings)
  }, [])

  function handleDelete (id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
