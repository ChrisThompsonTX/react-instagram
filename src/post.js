import React from 'react';
import './post.css';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>    
            {/* header => avatar + username */}
            {/* <img className="post__image" src="https://www.freecodecamp.org/news/content/images/"/> */}
            {/* image */}
            <h4>Username: caption</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
