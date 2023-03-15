import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    gigId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    star: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
}, 
    {
    timestamps: true
    }
);

export default mongoose.model("Review", ReviewSchema)
