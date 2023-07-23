import { Schema, model, models } from 'mongoose';

const CourseResultSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  forPosition: {
    type: Array,
    required: [true, 'ForPosition is required'],
  },
  result: {
    type: Boolean,
    required: [true, 'Result is required'],
  },
  userId: {
    type: String,
    required: [true, 'UserId is required'],
  },
  startTime: {
    type: Number,
    required: [true, 'startTime is required'],
  },
  finishTime: {
    type: Number,
    required: [true, 'finishTime is required'],
  },
});

const CourseResult = models.CourseResult || model('CourseResult', CourseResultSchema);
export default CourseResult;