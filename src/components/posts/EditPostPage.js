import React from "react";
import { connect } from "react-redux";
import { updatePost } from "../../actions/postAction";
import PostForm from "./BasePost/PostForm";
import { useHistory } from "react-router-dom";

const EditPostPage = (props) => {
  const history = useHistory();

  const handleSubmit = (post) => {
    const { id } = props.post;
    post = { ...post, id };
    props.updatePost(post);
    history.push("/admin/posts");
  };

  return (
    <>
      <h2>Edit post</h2>
      <PostForm onSubmit={handleSubmit} post={props.post} />
    </>
  );
};

export function getPostById(posts, id) {
  return posts.find((post) => post.id === id) || null;
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  const post = getPostById(state.posts, id);
  return {
    post,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch(updatePost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
