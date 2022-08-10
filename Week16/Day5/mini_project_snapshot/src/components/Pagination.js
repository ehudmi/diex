import React from "react";

function Pagination(props) {
  return (
    <div>
      <button onClick={() => props.getPics(props.topic, props.path, 12)}>
        12
      </button>
      <button onClick={() => props.getPics(props.topic, props.path, 18)}>
        18
      </button>
      <button onClick={() => props.getPics(props.topic, props.path, 24)}>
        24
      </button>
    </div>
  );
}

export default Pagination;
