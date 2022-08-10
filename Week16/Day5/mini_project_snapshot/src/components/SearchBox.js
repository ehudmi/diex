import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBox(props) {
  let navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.getPics(
            event.target.searchInput.value,
            `/${event.target.searchInput.value.toLowerCase()}`,
            props.number
          );
          navigate(`/${event.target.searchInput.value.toLowerCase()}`);
        }}
      >
        <input name="searchInput" type={"text"} />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
