import { createContext, useReducer } from "react";
import posts from "../data/posts.json";

const PostsContext = createContext();

function PostsProvider({ children }) {
  function postReducer(state, action) {
    console.log(state, action);
  }

  const [postsState, postsDisatch] = useReducer(postReducer, posts);

  return (
    <PostsContext.Provider value={{ postsState, postsDisatch }}>{children}</PostsContext.Provider>
  );
}

export { PostsProvider, PostsContext };
