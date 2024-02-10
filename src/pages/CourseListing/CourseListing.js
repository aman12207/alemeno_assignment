import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Data from "../../components/utils/Data";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import CardList from "../../components/CardList/CardList.js";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../redux/actions/courseAction.js";

const CourseListing = () => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses(Data));
  }, [dispatch]);

  const [searchField, setSearchField] = useState("");

  const filteredcourses = courses?.filter(
    (course) =>
      course.name.toLowerCase().includes(searchField.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="search-form ">
          <div className="top-bar">
            <Link to="/" className="home-icon">
              <FontAwesomeIcon icon={faHome} size="3x" />
            </Link>
            <h1 className="heading text-center text-4xl font-bold m-3">
              All Courses
            </h1>
          </div>
          <SearchBox handleChange={(e) => setSearchField(e.target.value)} />
        </div>
        <CardList courses={filteredcourses} />
      </div>
    </>
  );
};

export default CourseListing;
