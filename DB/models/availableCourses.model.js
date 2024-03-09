import { Schema, model, Types } from "mongoose";
const availableCoursesschema = new Schema(
  {
    StudentId: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
    // studentExamsId: {
    //   type: Types.ObjectId,
    //   ref: "studentExams",
    //   required: true,
    // },
    Available_Courses: [
      {
        type: Types.ObjectId,
        ref: "course",
        required: true,
      },
    ],
    TotalGpa: {
      type: Number,
      required: true,
      min: 0,
      max: 4,
    },
  },
  { timestamps: true }
);
const availableCoursesModel = model("availableCourses", availableCoursesschema);

export default availableCoursesModel;
