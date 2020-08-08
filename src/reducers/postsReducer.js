import POSTS from "../actions/actionsType";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS.FETCH_POSTS_SUCCESS: {
      return action.posts.reverse();
    }
    case POSTS.CREATE_POST_SUCCESS: {
      return [action.post, ...state];
    }
    case POSTS.DELETE_POST_SUCCESS: {
      return state.filter((post) => post.id !== action.id);
    }
    case POSTS.UPDATE_POST_SUCCESS: {
      console.log("update");
    }
    default:
      return state;
  }
};

export default postsReducer;
