import React from "react";
import { Link } from "react-router-dom";
const PostsList = (props) => {
  const { posts = [], onDeletePost, onEditPost } = props;
  if (posts.length === 0) return <div>No posts.</div>;
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="posts__item" key={post.id}>
          <Link className="posts__title" to="/">
            {post.title}
          </Link>
          <button
            onClick={() => onEditPost(post.id)}
            className="btn posts__btn"
            title="Edit"
          >
            <i className="fa fa-pencil-square-o" />
          </button>
          <button
            onClick={() => onDeletePost(post.id)}
            className="btn posts__btn"
            title="Delete"
          >
            <i className="fa fa-trash-o" />
          </button>
        </li>
      ))}
    </ul>
  );
};
export default PostsList;
