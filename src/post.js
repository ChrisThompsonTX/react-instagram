import React, { useEffect } from 'react';
import './post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';

function Post({ postId, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()))
                });
        }

        return () => {
            unsubscribe();
        };
    }, [postId]);

    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>    
            </div>
            <img className="post__image" src={imageUrl}/>
            <h4 className="post__text"><strong>{username} </strong>{caption}</h4>
        </div>
    )
}

export default Post
