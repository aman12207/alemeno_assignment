import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/courses" className="link">
        All Courses
      </Link>
      <Link to="/dashboard" className="link">
        My Courses
      </Link>
    </div>
  );
};

export default Home;
