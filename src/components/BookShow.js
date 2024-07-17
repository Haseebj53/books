import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    onUpdate(id, newTitle);
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onUpdate={handleSubmit} />;
  }
  return (
    <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
