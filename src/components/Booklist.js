import BookShow from "./BookShow";

function BookList({ books, onDelete, onUpdate }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        onDelete={onDelete}
        key={book.id}
        book={book}
        onUpdate={onUpdate}
      />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
