import React, { useState } from "react";

const AddNote = ({ handleSubmit = () => {} }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const textAreaRow = window.innerHeight > 600 ? 10 : 4;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return alert("All field required...");
    handleSubmit({ title, content: body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="myForm animated fadeIn" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title text-dark">Title:</label>
        <input
          className="form-control input-lg"
          type="text"
          name="title"
          id="text"
          placeholder=""
          onChange={({ target }) => setTitle(target.value)}
          value={title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password text-dark">Body:</label>
        <textarea
          rows={textAreaRow}
          className="form-control input-lg"
          name="text-area"
          placeholder=""
          onChange={({ target }) => setBody(target.value)}
          value={body}
        />
      </div>
      <div className="form-group d-flex justify-content-end">
        <input
          type="submit"
          name="submit"
          className="btn btn-primary btn-lg "
          onClick={onSubmit}
          value={"Save"}
        />
      </div>
    </form>
  );
};

export default AddNote;
