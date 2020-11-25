import React from "react";
const Note = ({ heading, content, onClose = () => {} }) => {
  return (
    <div className="border-bottom p-2 animated fadeIn">
      <button
        type="button"
        className="close float-right m-1 p-1"
        onClick={onClose}
      >
        <span>&times;</span>
      </button>
      <h4 className="text-dark">{heading}</h4>

      <p className="text-muted">{content}</p>
    </div>
  );
};

export default Note;
