import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import CourseListing from "./pages/CourseListing/CourseListing.js";
import CourseDetails from "./pages/CourseDetails/CourseDetails.js";
import Home from "./pages/Home/Home.js";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseListing />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </div>
  );
};

export default App;