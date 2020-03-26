import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();
const intialData = () => {
  const localData = localStorage.getItem("books");
  return localData ? JSON.parse(localData) : [];
};

function BookContextProvider(props) {
  const [books, setBooks] = useState(intialData);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  const addBook = (author, title) => [
    //  new es6
    setBooks([...books, { author, title, id: uuid() }])
  ];
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
