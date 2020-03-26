import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(author, title);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="book title"
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        placeholder="author"
        onChange={e => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
}

export default BookForm;
