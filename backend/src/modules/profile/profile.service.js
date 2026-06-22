import { Profile } from './profile.model.js';

export const getProfile = async () => {
  let profile = await Profile.findOne({});
  if (!profile) {
    profile = await Profile.create({});
  }
  return profile;
};

export const updateProfile = async (updates) => {
  const result = await Profile.findOneAndUpdate(
    {}, // match the only document
    { $set: updates },
    { new: true, upsert: true }
  );
  return result;
};
