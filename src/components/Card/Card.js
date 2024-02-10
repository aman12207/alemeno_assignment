import React from "react";
import "../Card/Card.css"
import { Link } from "react-router-dom";

export const Card = ({ course }) => {
    return (
        <Link to={`/courses/${course.id}`}>
            <div className="card-container">
                <img src={course.thumbnail} className="rounded-lg" alt='course-img' />
                <div className="card-container-bottom">
                    <h1 className="font-bold text-2xl mb-3">{course.name}</h1>
                    <p>{course.instructor}</p>
                </div>
            </div>
        </Link>
    )
}