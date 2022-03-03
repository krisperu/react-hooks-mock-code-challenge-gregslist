import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listingCard = listings.map((listingItem) => 
  ( <ListingCard
      key={listingItem.id}
      description={listingItem.description}
      image={listingItem.image}
      location={listingItem.location}
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
