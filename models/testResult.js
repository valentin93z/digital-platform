import { Schema, model, models } from 'mongoose';

const TestResultSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  forPosition: {
    type: Array,
    required: [true, 'ForPosition is required'],
  },
  answers: {
    type: Array,
    required: [true, 'Questions is required'],
  },
  trueAnswers: {
    type: Number,
    required: [true, 'TrueAnswers is required'],
  },
  result: {
    type: Number,
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

const TestResult = models.TestResult || model('TestResult', TestResultSchema);
export default TestResult;