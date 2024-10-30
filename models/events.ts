import mongoose, { Schema, Document } from 'mongoose';

const EventSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    sponsors: [{
        name: { type: String, required: true },
        logoUrl: { type: String, required: true }
    }],
    youtubeLink: { type: String, required: true }
});

const Event = mongoose.model('Event', EventSchema);

export default Event;