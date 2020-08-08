import { takeLatest, put, call, select, takeEvery } from "redux-saga/effects";
import POSTS from "../../actions/actionsType";
import { creaetPostSuccess } from "../../actions/postAction";
import { createtPostInAPI } from "../../api/PostApi";

function* handlePostCreate(action) {
  const newPost = yield call(createtPostInAPI, action.post);

  yield put(creaetPostSuccess(newPost));
}

export function* watchCreatePosts() {
 
  yield takeLatest(POSTS.CREATE_POST, handlePostCreate);
}
