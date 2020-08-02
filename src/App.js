import React, {useState} from 'react';
import './App.css';
import Post from './post.js'

function App() {
  const [posts, setPosts] = useState([
    {
      username: "chris",
      caption: "wow it works",
      imageUrl: "https://imagemagick.org/image/wizard.jpg"
    },
    {
      username: "chris",
      caption: "wow it works",
      imageUrl: "https://imagemagick.org/image/wizard.jpg",
    }
  ]);


  return (
    <div className="App">
      
      <div className="app__header">
        <img
          className="app_headerImage"
          src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

    </div>
  );
}

export default App;
