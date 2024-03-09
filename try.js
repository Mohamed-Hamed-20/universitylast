const passedIn = [ 2,3];

const courses = [
  {
    _id: 3,
    course_name: "tamam ",
    Prerequisites: [1, 2],
  },
  {
    _id: 5,
    course_name: "NOT tamam ",
    Prerequisites: [1, 3],
  },
  {
    _id: 6,
    course_name: "tamam",
    Prerequisites: [2],
  },
  {
    _id: 7,
    course_name: "tamam",
    Prerequisites: [1],
  },
];

const goodcourses = courses.filter((course) => {
  return course.Prerequisites.every((ele) => passedIn.includes(ele));
});

console.log(goodcourses);
