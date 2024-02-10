import React, { useEffect, useRef } from "react";
import './SearchBox.css'
const SearchBox = ({ handleChange, searchField }) => {
  const search = useRef();
  useEffect(() => {
    search.current.focus();
  }, []);

  return (
    <div className="text-center">
      <input
        className="search"
        type="search"
        placeholder="Search Courses"
        ref = {search}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
