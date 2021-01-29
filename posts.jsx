import React from 'react';
import posts from './Posts.module.css';
import SinglePost from './SinglePost/SinglePost'

const Posts = (props) => {
    let postElements = props.dataPost.postData.map(p => <SinglePost id={p.id} message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
                let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateTextPost(text);
           }
    return (
        <div className={posts.item}>
            <div><h3>My post</h3></div>
            <div>New post</div>
            <div><textarea onChange={onChangePost}
                           className={posts.area}
                           ref={newPostElement}
                           value={props.newPostText}
            /></div>
            <div>
                <button className={posts.add} onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </div>
    )
}
export default Posts; 
