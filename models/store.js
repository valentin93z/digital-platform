import { Schema, model, models } from 'mongoose';

const StoreSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  direction: {
    type: String,
    required: [true, 'Direction is required'],
  },
  sector: {
    type: String || null,
    required: [true, 'Sector is required'],
  },
});

const Store = models.Store || model('Store', StoreSchema);
export default Store;