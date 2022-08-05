import React from "react";

function PhotoPage(props) {
  if (!props.images) {
    return <div>Say What?</div>;
  } else {
    console.log(props);
    return (
      <div>
        <h1>Hi</h1>
        <h1>{props.perPage}</h1>
        {props.images.photos.map((photo, index) => {
          return <img key={index} alt="this" src={photo.src.small} />;
        })}
      </div>
    );
  }
}

export default PhotoPage;
