import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CourseCard from "../../components/CourseCard/CourseCard.js";
import "./Dashboard.css";
import SearchBox from "../../components/SearchBox/SearchBox.js";
import { userCourseData } from "../../components/utils/UserCourseData.js";

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(userCourseData);

  const markCourseCompleted = (id) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, completed: true } : course
      )
    );
  };

  const [searchField, setSearchField] = useState("");

  const filteredcourses = enrolledCourses?.filter(
    (course) =>
      course.name.toLowerCase().includes(searchField.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div className="dashboard-container">
        <div className="search-form">
          <div className="top-bar">
            <Link to="/" className="home-icon">
              <FontAwesomeIcon icon={faHome} size="3x" />
            </Link>
            <h1 className="heading text-center text-4xl font-bold m-3">My Courses</h1>
          </div>
            <SearchBox handleChange={(e) => setSearchField(e.target.value)} />
        </div>
        <div className="course-list">
          {filteredcourses.length > 0 &&
            filteredcourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                markCompleted={markCourseCompleted}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
