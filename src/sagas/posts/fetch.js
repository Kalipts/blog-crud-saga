import { takeLatest, put, call } from "redux-saga/effects";
import POSTS from "../../actions/actionsType";
import { fetchPostsSuccess } from "../../actions/postAction";
import { fetchPostsFromApi } from "../../api/PostApi";

function* fetchPosts() {
  const postsFromApi = yield call(fetchPostsFromApi);
  yield put(fetchPostsSuccess(postsFromApi));
}

export function* watchFetchPosts() {
  yield takeLatest(POSTS.FETCH_POSTS, fetchPosts);
}
