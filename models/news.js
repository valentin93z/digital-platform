import { Schema, model, models } from 'mongoose';

const NewsSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
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
  tags: {
    type: Array,
  },
  date: {
    type: Object,
  },
});

const News = models.News || model('News', NewsSchema);
export default News;