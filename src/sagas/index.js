import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./posts/fetch";
import { watchCreatePosts } from "./posts/create";
import { watchDeletePost } from "./posts/delete";
import { watchUpdatePost } from "./posts/update";

function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchCreatePosts(),
    watchDeletePost(),
    watchUpdatePost(),
  ]);
}

export default rootSaga;
