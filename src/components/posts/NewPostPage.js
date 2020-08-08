import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postAction";
import PostForm from "./BasePost/PostForm";

const NewPostPage = (props) => {
  const handleSubmit = (post) => {
    props.createPost(post);
  };

  return (
    <div>
      <h2>Create new post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(NewPostPage);
