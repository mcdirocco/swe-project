import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    points: {
      type: Number,
      default: 0,
    },
});

export default mongoose.model('Users', UserSchema);
