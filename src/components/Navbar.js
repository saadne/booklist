import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1> Saadne Reading list</h1>
      <p>currently you have {books.length} books to get thought</p>
    </div>
  );
}

export default Navbar;
