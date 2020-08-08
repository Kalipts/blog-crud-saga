import POSTS from "./actionsType";

const fetchPosts = () => {
  return {
    type: POSTS.FETCH_POSTS,
  };
};

const fetchPostsPending = () => {
  return {
    type: POSTS.FETCH_POSTS_PENDING,
  };
};
const fetchPostsSuccess = (posts) => {
  return {
    type: POSTS.FETCH_POSTS_SUCCESS,
    posts,
  };
};

const fetchPostsFailure = () => {
  return {
    type: POSTS.fetchPostsFailure,
  };
};

const createPost = (post) => {
  return {
    type: POSTS.CREATE_POST,
    post,
  };
};

const creaetPostSuccess = (post) => {
  return {
    type: POSTS.CREATE_POST_SUCCESS,
    post,
  };
};

const deletePost = (id) => {
  console.log("action: ", id);
  return {
    type: POSTS.DELETE_POST,
    id,
  };
};

const deletePostSuccess = (id) => {
  return {
    type: POSTS.DELETE_POST_SUCCESS,
    id,
  };
};

const updatePost = (post) => {
  return {
    type: POSTS.UPDATE_POST,
    post,
  };
};

const updatePostSuccess = (post) => {
  return {
    type: POSTS.UPDATE_POST_SUCCESS,
    post,
  };
};

export {
  fetchPosts,
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsFailure,
  createPost,
  creaetPostSuccess,
  deletePost,
  deletePostSuccess,
  updatePost,
  updatePostSuccess,
};
