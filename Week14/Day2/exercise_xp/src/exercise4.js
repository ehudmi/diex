import React from "react";
import "./exercise4.css";
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const Exercise = () => {
  return (
    <div>
      <h1 style={{ style_header }}>This is a header</h1>
      <p className="para">this is a paragraph</p>
      <a href="http://learn.di-learning.com/courses/collection/34/course/158/section/486/chapter/1325">
        Developers Institute
      </a>
      <form>
        <label htmlFor="username">Enter your name</label>
        <input name="username" type={"text"}></input>
      </form>
      <img
        alt="this is Me"
        src="https://vignette.wikia.nocookie.net/adventuresofmerlin/images/6/67/Merlin_6.jpg/revision/latest?cb=20111224134436"
      />
      <ul>
        <li>Joker man</li>
        <li>Along the watchtowers</li>
        <li>Sarah</li>
      </ul>
    </div>
  );
};
export default Exercise;
