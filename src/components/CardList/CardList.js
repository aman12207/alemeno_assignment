import React from "react";
import { Card } from "../Card/Card"
import "./CardList.css"

export const CardList = ({ courses }) => {
  return <div className="card-list">
    {courses?.map(course => (
      <Card key={course.id} course={course} />
    ))}
  </div>
}


export default CardList