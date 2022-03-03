import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {
  const listingCard = listings.map((listingItem) => 
  ( <ListingCard
      key={listingItem.id}
      id={listingItem.id}
      description={listingItem.description}
      image={listingItem.image}
      location={listingItem.location}
      onDelete={onDelete}
    />))

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
