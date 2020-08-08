import React from "react";

const PostHeading = (props) => {
  const { onNewPost } = props;
  return (
    <div>
      <div className="posts-heading">
        <h2 className="posts-heading__title">Posts</h2>
        <button className="btn posts-heading__btn" onClick={onNewPost}>
          New Post
        </button>
      </div>
    </div>
  );
};

export default PostHeading;
