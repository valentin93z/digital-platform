import { Schema, model, models } from 'mongoose';

const VideoControlSchema = new Schema({
    date: {
        type: String,
        required: [true, 'Date is required'],
    },
    time: {
        type: String,
        required: [true, 'Time is required'],
    },
    store: {
        type: String,
        required: [true, 'Store is required'],
    },
    sector: {
        type: String,
        required: [true, 'Sector is required'],
    },
    seller: {
        type: String,
        required: [true, 'Seller is required'],
    },
    sellerPosition: {
        type: String,
        required: [true, 'Seller position is required'],
    },
    answers: {
        type: Array,
        required: [true, 'Answers is required'],
    },
    creator: {
        type: String,
        required: [true, 'Creator is required'],
    }
});

const VideoControl = models.VideoControl || model('VideoControl', VideoControlSchema);
export default VideoControl;