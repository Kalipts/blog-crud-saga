import { takeLatest, put, call } from "redux-saga/effects";
import POSTS from "../../actions/actionsType";
import { updatePostSuccess } from "../../actions/postAction";
import { updatePostInAPI } from "../../api/PostApi";

function* updatePost(action) {
  const post = yield call(() => updatePostInAPI(action.post));
  yield put(updatePostSuccess(post));
}

export function* watchUpdatePost() {
  yield takeLatest(POSTS.UPDATE_POST, updatePost);
}
