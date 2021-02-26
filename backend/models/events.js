import mongoose from "mongoose";

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
});

export default mongoose.model('Events', EventSchema);