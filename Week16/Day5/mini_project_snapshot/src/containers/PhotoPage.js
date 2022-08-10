import React from "react";

function PhotoPage(props) {
  return (
    <div className="pictures">
      {props.images.photos.map((photo, index) => {
        return <img key={index} alt="this" src={photo.src.small} />;
      })}
    </div>
  );
}

export default PhotoPage;
