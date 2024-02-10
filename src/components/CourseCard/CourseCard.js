import React from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar.js";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course, markCompleted }) => {
  const { name, instructor, thumbnail, dueDate, completed } = course;

  return (
    <div className="course-card">
      <Link to={`/courses/${course.id}`}>
        <img src={thumbnail} alt={name} />
      </Link>
      <div className="card-container-bottom">
        <Link to={`/courses/${course.id}`}>
          <h2>{name}</h2>
          <p>Instructor: {instructor}</p>
          <p>Due Date: {dueDate}</p>
          <ProgressBar completed={completed} />
        </Link>
        {!completed && (
          <button onClick={() => markCompleted(course.id)}>
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
