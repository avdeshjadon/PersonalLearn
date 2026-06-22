import { asyncHandler } from '../../utils/asyncHandler.js';
import * as profileService from './profile.service.js';

export const getProfile = asyncHandler(async (req, res) => {
  const profile = await profileService.getProfile();
  res.json(profile);
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { fullName, email, bio, avatar } = req.body;
  
  const updatedProfile = await profileService.updateProfile({
    fullName,
    email,
    bio,
    avatar
  });

  res.json(updatedProfile);
});
