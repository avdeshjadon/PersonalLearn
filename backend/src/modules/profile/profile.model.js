import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: 'User',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  bio: {
    type: String,
    default: '',
    trim: true
  },
  avatar: {
    type: String,
    default: ''
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

export const Profile = mongoose.model('Profile', profileSchema);
