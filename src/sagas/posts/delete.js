import { takeLatest, put, call } from "redux-saga/effects";
import { deletePostFromApi } from "../../api/PostApi";
import POSTS from "../../actions/actionsType";
import { deletePostSuccess } from "../../actions/postAction";

function* deletePost(action) {
  console.log("saga", action);
  yield call(() => deletePostFromApi(action.id));
  yield put(deletePostSuccess(action.id));
}

export function* watchDeletePost() {
  yield takeLatest(POSTS.DELETE_POST, deletePost);
}
