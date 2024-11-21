import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post => (
        <article key={post.id} style={{border: "1px solid white", display:'flex', flexDirection:'column', padding: "10px", minWidth: "200px", borderRadius: "10px", alignItems: "flex-start"}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <section>
            <h2>Posts</h2>
            <div style={ {display:'flex', flexDirection:'column', gap: "10px" }}>
                {renderPosts}
            </div>
        </section>
    )
}

export default PostsList