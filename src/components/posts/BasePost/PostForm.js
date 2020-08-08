import React, { useState } from "react";

const PostForm = (props) => {
  let initTitle = "";
  let initBody = "";

  if (props.post) {
    initTitle = props.post.title;
    initBody = props.post.body;
  }

  const [title, setTitle] = useState(initTitle);
  const [body, setBody] = useState(initBody);

  const handleTitleChange = (e) => {
    const titleInput = e.currentTarget.value;
    setTitle(titleInput);
  };

  const handleBodyChange = (e) => {
    const bodyInput = e.currentTarget.value;
    setBody(bodyInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ title, body });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field field-text">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
        </div>

        <div className="field field-text">
          <label htmlFor="body">
            Body:
            <textarea id="body" value={body} onChange={handleBodyChange} />
          </label>
        </div>

        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default PostForm;
