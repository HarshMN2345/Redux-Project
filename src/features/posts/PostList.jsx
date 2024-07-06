import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from 'react'
import PostAuthor from "./PostAuthor";
import Time from "../../components/Time";

const PostList = () => {
    const posts=useSelector(selectAllPosts)
    const renderedPosts=posts.map(post=>(
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p className="postCredit">
            <PostAuthor userId={post.userId}/>
            {/* {<Time timestamp={post.date}/>  */}
          </p>
          <p>{post.content.substring(0,100)}</p>
        </article>

    ))
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList