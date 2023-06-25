import { Schema, model, models } from 'mongoose';

const TestSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  forPosition: {
    type: Array,
    required: [true, 'ForPosition is required'],
  },
  minPercentage: {
    type: Number,
    required: [true, 'MinPercentage is required'],
  },
  attempts: {
    type: Number,
    required: [true, 'Attempts is required'],
  },
  deadline: {
    type: String,
    required: [true, 'Deadline is required'],
  },
  questions: {
    type: Array,
    required: [true, 'Questions is required'],
  }
});

const Test = models.Test || model('Test', TestSchema);
export default Test;