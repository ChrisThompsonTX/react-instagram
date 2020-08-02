import React, {useState, useEffect } from 'react';
import './App.css';
import Post from './post.js'
import { db } from './firebase.js';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

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
