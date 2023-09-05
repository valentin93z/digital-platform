import { Schema, model, models } from 'mongoose';

const DirectionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
});

const Direction = models.Direction || model('Direction', DirectionSchema);
export default Direction;