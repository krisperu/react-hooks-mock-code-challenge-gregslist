import React, {useState} from "react";

function ListingCard({description, image, location, id, onDelete}) {
  const [favClick, setFavClick] = useState(false)

  function deleteListing() {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {method: 'DELETE' })
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favClick ? (
          <button 
            onClick={() => setFavClick(false)}
            className="emoji-button favorite active"
          >★</button>
        ) : (
          <button 
            onClick={() => setFavClick(true)}
            className="emoji-button favorite"
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
