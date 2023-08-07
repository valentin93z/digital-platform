import { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  year: {
    type: Number,
    required: [true, 'Year is required'],
  },
  month: {
    type: Number,
    required: [true, 'Month is required'],
  },
  day: {
    type: Number,
    required: [true, 'Day is required'],
  },
  hours: {
    type: Number,
    required: [true, 'Hours is required'],
  },
  minutes: {
    type: Number,
    required: [true, 'Minutes is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
  },
  members: {
    type: Array,
    required: [true, 'Members is required'],
  },
  link: {
    type: String,
    required: [true, 'Link is required'],
  },
});

const Event = models.Event || model('Event', EventSchema);
export default Event;