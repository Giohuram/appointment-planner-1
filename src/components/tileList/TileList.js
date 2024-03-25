import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div className="tile-list">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <Tile key={index} name={item.name} {...item} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

