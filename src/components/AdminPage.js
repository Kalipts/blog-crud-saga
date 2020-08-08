import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import PostsPage from "./posts/PostsPage";
import NewPostPage from "./posts/NewPostPage";
import DetailPostPage from "./posts/DetailPostPage";
import EditPostPage from "./posts/EditPostPage";

const AdminPage = (props) => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/admin" className="header__brand">
            Admin
          </Link>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route
            exact
            path={`/admin`}
            render={() => <Redirect to={`${`/admin/posts`}`} />}
          />
          <Route exact path={`/admin/posts`} component={PostsPage} />
          <Route exact path={`/admin/posts/new`} component={NewPostPage} />
          <Route exact path={`/admin/posts/:id`} component={DetailPostPage} />
          <Route
            exact
            path={`/admin/posts/:id/edit`}
            component={EditPostPage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPage;
