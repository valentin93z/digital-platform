import { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  forPosition: {
    type: Array,
    required: [true, 'ForPosition is required'],
  },
  imageUrl: {
    type: String,
    required: [true, 'imageUrl is required'],
  },
  path: {
    type: String,
    required: [true, 'Path is required'],
  },
});

const Course = models.Course || model('Course', CourseSchema);
export default Course;