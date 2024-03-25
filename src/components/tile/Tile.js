import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {/* Assuming description is an object */}
      <ul>
        {Object.values(description).map((value, index) => (
          <li key={index} className="tile">
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tile;
