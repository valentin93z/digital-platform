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
  image: {
    public_id: {
      type: String,
    },
    secure_url: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  path: {
    public_id: {
      type: String,
    },
    secure_url: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

const Course = models.Course || model('Course', CourseSchema);
export default Course;