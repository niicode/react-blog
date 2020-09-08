import React from "react";

import CreateNewPost from './components/CreateNewPost'
import Posts from './components/Post'
import DisplayAllPosts from "./components/DisplayAllPosts";


const App = ( ) => {
  return (
    <div>
      <Posts/>
      <DisplayAllPosts/>
      <CreateNewPost/>
    </div>
  );
};
export default App;
