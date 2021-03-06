import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props
    .posts
    .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostELement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostELement.current.value;
    let action = (updateNewPostTextActionCreator(text));
    props.dispatch(action);
  }

  return (
    <div className ={s.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea onChange ={onPostChange} ref={newPostELement} value={props.newPost}></textarea>
        </div>

        <div>
          <button onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;