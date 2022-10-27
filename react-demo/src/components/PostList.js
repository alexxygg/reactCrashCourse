//We need to import both, useEffect is for our GET requests.
import { useState, useEffect } from "react";

const PostList = () => {
  //Our initial value, normally an empty data structure
  const [posts, setPosts] = useState([]);
  //The fetch API returns a promise, which we need to resolve!!!
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostList;
//This will ALL run every time the component renders...
//To only have it run the first time it does, we pass in a
//2nd argument which is an empty array. It is a list of
//dependencies on which the post list depends on. It determines when to rerun them.
