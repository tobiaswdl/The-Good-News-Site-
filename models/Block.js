const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [5, 'Title must be at least 5 characters']
    },
    text: {
        type: String,
        required: [true, 'Content is required'],
        trim: true,
        minlength: [10, 'Content must be at least 10 characters']
    }
}, { timestamps: true });

module.exports = mongoose.model('Block', blockSchema);
