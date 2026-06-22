import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema({
  folder: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  }
});

// Compound index to ensure uniqueness of folder and slug combo
bookmarkSchema.index({ folder: 1, slug: 1 }, { unique: true });

export const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
