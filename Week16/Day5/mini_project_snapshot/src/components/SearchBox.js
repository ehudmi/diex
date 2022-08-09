// import React, { Component } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";

// const submitHandler = (event) => {
//   event.preventDefault();
//   console.log(event.target.searchInput.value);
//   this.props.getPics(
//     event.target.searchInput.value,
//     `/${event.target.searchInput.value.toLowerCase()}`
//   );
// };

function SearchBox(props) {
  let navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.getPics(
            event.target.searchInput.value,
            `/${event.target.searchInput.value.toLowerCase()}`
          );
          navigate(`/${event.target.searchInput.value.toLowerCase()}`);
        }}
      >
        <input name="searchInput" type={"text"} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;

// class SearchBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   submitHandler = (event) => {
//     event.preventDefault();
//     console.log(event.target.searchInput.value);
//     this.props.getPics(
//       event.target.searchInput.value,
//       `/${event.target.searchInput.value.toLowerCase()}`
//     );
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <input name="searchInput" type={"text"} />
//           <button type="submit">Search</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBox;
