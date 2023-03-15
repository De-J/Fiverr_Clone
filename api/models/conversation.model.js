import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    sellerId: {
        type: String,
        required: true,
        unique: true
    },
    buyerId: {
        type: String,
        required: true
    },
    readBySeller: {
        type: Boolean,
        required: false
    },
    readByBuyer: {
        type: Boolean,
        required: true
    },
    lastMessage: {
        type: String,
        required: false
    },
}, 
    {
    timestamps: true
    }
);

export default mongoose.model("Conversation", ConversationSchema);
