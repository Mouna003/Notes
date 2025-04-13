import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters"]
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    minlength: [5, "Content must be at least 5 characters"]
  }
}, { timestamps: true });

export default mongoose.model('Note', NoteSchema);