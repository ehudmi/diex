import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    this.setState({ posts: json });
  }
  render() {
    // const {userId,id,title,body}=this.state.posts
    return (
      <div>
        {this.state.posts.length > 0 ? (
          <div>
            <h1>List of posts</h1>
            <div>
              {this.state.posts.map(({ id, title, body }) => {
                return (
                  <ul key={id} style={{ listStyleType: "none" }}>
                    <li>
                      <label style={{ fontWeight: "bold" }}>Id: </label>
                      {id}
                    </li>
                    <li>
                      <label style={{ fontWeight: "bold" }}>Title: </label>
                      {title}
                    </li>
                    <li>
                      <label style={{ fontWeight: "bold" }}>Body: </label>
                      {body}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PostList;
// if (this.state.posts.length > 0) {
//     return this.state.posts.map(({ userId, id, title, body }) => {
//       return (
//         <div key={id}>
//           <p>{userId}</p>
//           <p>{id}</p>
//   <p>{title}</p>
//   <p>{body}</p>
//         </div>
//       );
//     });
//   }
