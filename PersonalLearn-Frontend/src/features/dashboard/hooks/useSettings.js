import { useState, useEffect, useCallback } from 'react';

const SETTINGS_KEY = 'plearn_user_settings';
const API_URL = `${import.meta.env.VITE_API_URL || ''}/api/profile`;

const DEFAULT_SETTINGS = {
  profile: {
    fullName: 'User',
    email: '',
    bio: '',
    avatar: ''
  },
  appearance: {
    compactMode: false
  }
};

export function useSettings() {
  const [settings, setSettings] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(SETTINGS_KEY);
        if (saved) {
          return { ...DEFAULT_SETTINGS, appearance: JSON.parse(saved).appearance || DEFAULT_SETTINGS.appearance };
        }
      } catch (e) {
        console.error('Failed to parse settings', e);
      }
    }
    return DEFAULT_SETTINGS;
  });

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const profileData = await res.json();
        setSettings(prev => ({
          ...prev,
          profile: {
            fullName: profileData.fullName || 'User',
            email: profileData.email || '',
            bio: profileData.bio || '',
            avatar: profileData.avatar || ''
          }
        }));
      }
    } catch (e) {
      console.error('Failed to fetch profile', e);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    const fetchProfileData = async () => {
      try {
        const res = await fetch(API_URL);
        if (ignore) return;
        if (res.ok) {
          const profileData = await res.json();
          if (ignore) return;
          setSettings(prev => ({
            ...prev,
            profile: {
              fullName: profileData.fullName || 'User',
              email: profileData.email || '',
              bio: profileData.bio || '',
              avatar: profileData.avatar || ''
            }
          }));
        }
      } catch (e) {
        if (!ignore) console.error('Failed to fetch profile', e);
      }
    };
    fetchProfileData();
    return () => { ignore = true; };
  }, []);

  // Persist local appearance settings
  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ appearance: settings.appearance }));
  }, [settings.appearance]);

  const updateProfile = async (profileData) => {
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });
      if (res.ok) {
        const updated = await res.json();
        setSettings(prev => ({ ...prev, profile: { ...prev.profile, ...profileData } }));
      }
    } catch (e) {
      console.error('Failed to update profile', e);
    }
  };

  const toggleAppearance = (key) => {
    setSettings(prev => ({ 
      ...prev, 
      appearance: { ...prev.appearance, [key]: !prev.appearance[key] } 
    }));
  };

  return {
    settings,
    updateProfile,
    toggleAppearance
  };
}

export default useSettings;
