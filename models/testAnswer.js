import { Schema, model, models } from 'mongoose';

const TestAnswerSchema = new Schema({
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
  }
});

const TestAnswer = models.TestAnswer || model('TestAnswer', TestAnswerSchema);
export default TestAnswer;