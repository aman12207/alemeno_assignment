const SET_COURSES = 'SET_COURSES';
const intialState = {
  courses : [],
};
export const courseReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_COURSES:
      return { ...state, courses: payload };
    default:
      return state;
  }
};