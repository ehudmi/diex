import React from "react";

const UserFavoriteColors = ({ animal }) => {
  return (
    <div>
      {animal.map((item, i) => (
        <ul key={i}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserFavoriteColors;
