import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PostsList from "./BasePost/PostsList";
import PostHeading from "./BasePost/PostsHeading";
import { fetchPosts, deletePost } from "../../actions/postAction";
import { useHistory } from "react-router-dom";

const PostsPage = (props) => {
  const history = useHistory();
  const { posts } = props;

  useEffect(() => {
    console.log('hello')
    props.fetchPosts();
  }, []);

  const handleDeletePost = (id) => {
    if (window.confirm("Do you really want to delete this post?")) {
      props.deletePost(id);
    }
  };
  const handleEditPost = (id) => {
    history.push(`/admin/posts/${id}/edit`);
  };

  const handleNewPost = () => {
    history.push(`/admin/posts/new`);
  }

  return (
    <>
      <PostHeading onNewPost={handleNewPost} />
      <PostsList
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
        posts={posts}
      />
    </>
  );
};

const mapStateToProps = (state) => {

  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
