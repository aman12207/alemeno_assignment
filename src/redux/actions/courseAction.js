const SET_COURSES = 'SET_COURSES';
export const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    payload: courses,
  };
};