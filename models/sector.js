import { Schema, model, models } from 'mongoose';

const SectorSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  leader: {
    type: String || null,
    required: [true, 'Leader is required'],
  }
});

const Sector = models.Sector || model('Sector', SectorSchema);
export default Sector;