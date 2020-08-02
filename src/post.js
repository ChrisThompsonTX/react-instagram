import React from 'react';
import './post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="username"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>    
            </div>
            {/* header => avatar + username */}
            {/* <img className="post__image" src="https://www.freecodecamp.org/news/content/images/"/> */}
            <h4 className="post__text"><strong>username:</strong>caption</h4>
        </div>
    )
}

export default Post
