import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Syllabus } from '../../components/Syllabus/Syllabus.js';
import { setCourses } from '../../redux/actions/courseAction.js';
import Data from '../../components/utils/Data';
import './CourseDetails.css';

export const CourseDetails = () => {
    const courses = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(setCourses(Data));
    }, [dispatch])

    const selectedCourse = courses?.filter(course => course.id === parseInt(id));

    return (
        <div className='course-details-container'>
            {selectedCourse.length > 0 && selectedCourse.map((course) => {
                const { thumbnail, name, instructor, description, enrollmentStatus, duration, schedule, location, prerequisites, syllabus } = course;
                return <div className="course-details">
                    <img src={thumbnail} alt='course-img' />
                    <div>
                        <h1>{name}</h1>
                        <h2>Instructor: {instructor}</h2>
                        <p>{description}</p>
                        <p>Enrollment Status: {enrollmentStatus}</p>
                        <p>Duration: {duration}</p>
                        <p>Schedule: {schedule}</p>
                        <p>Location: {location}</p>
                        <p>Prerequisites:</p>
                        <ul>
                            {prerequisites?.map((it, index) => {
                                return <li key={index}>{it}</li>;
                            })}
                        </ul>
                        <div className="syllabus">
                            <Syllabus syllabus={syllabus} />
                        </div>
                    </div>
                </div>

            })}
        </div>



    )
}

export default CourseDetails