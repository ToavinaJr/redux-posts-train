import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { postAdded } from './postsSlice';
import { PostInterface } from '../../types/posts/posts.types';

function AddPostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newPost : PostInterface= {
            id: posts.length+1,
            content: content,
            title: title
        };
        if (title.trim() !== "" && content.trim()  !== "")
            dispatch(postAdded(newPost));
    }

    return (
        <section>
            <h2>Add a new Post</h2>
            <form action=""
                onSubmit={(e) => handleSubmit( e )}
                style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}}
            >
                <label htmlFor="postTitle">Post title :</label>
                <input 
                    style={{padding: "10px", width: "300px"}}
                    type="text" 
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={(e) => onTitleChanged(e)}
                />
                <label htmlFor="postContent">Post content :</label>
                <textarea 
                    name="" 
                    id=""
                    style={{padding: "10px", width: "300px", height: "100px"}}
                    value={content}
                    onChange={(e) => onContentChanged(e)}
                    placeholder="What's on your mind?"
                >                    
                </textarea>
                <button type='submit'>Poster</button>
            </form>
        </section>
    )
}

export default AddPostForm