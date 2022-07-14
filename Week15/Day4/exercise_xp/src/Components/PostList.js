import React from "react";

const data1 = require("./Exercise2aData.json");
console.log();
const PostList = () => {
  return data1.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <h5>{item.content}</h5>
      </div>
    );
  });
};

export default PostList;
