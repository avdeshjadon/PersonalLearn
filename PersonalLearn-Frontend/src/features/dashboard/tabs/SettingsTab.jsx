import React, { useState } from 'react';
import { useTheme, useSettings } from '../../../hooks';
import { User, Palette, Camera, Check } from 'lucide-react';

const SEEDS = [
  "Felix", "Aneka", "Jasper", "Mimi", "Oscar", "Lily", "Leo", "Max", 
  "Coco", "Lola", "Charlie", "Buddy", "Daisy", "Oliver", "Luna", "Milo",
  "Chloe", "Bella", "Jack", "Rocky", "Zeus", "Toby", "Buster", "Duke",
  "Bear", "Lucky", "Harley", "Penny", "Sadie", "Molly", "Bailey", "Riley",
  "Zoe", "Roxy", "Gracie", "Rosie", "Ruby", "Sophie", "Lucy", "Abby",
  "Maggie", "Stella", "Nala", "Mia", "Ginger", "Princess", "Angel", "Peanut",
  "Shadow", "Pepper", "Cookie", "Apollo", "Rex", "Romeo", "Bentley", "Tank",
  "Diesel", "Dexter", "Cooper", "Zephyr"
];

const STYLES = ['avataaars', 'bottts', 'micah', 'pixel-art', 'fun-emoji', 'adventurer', 'notionists'];

const PREBUILT_AVATARS = SEEDS.map((seed, index) => {
  const style = STYLES[index % STYLES.length];
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
});

const THEME_DETAILS = {
  light: { name: 'Light', bg: '#fdfbf7', card: '#ffffff', accent: '#d97757', isDark: false },
  dark: { name: 'Dark', bg: '#181817', card: '#222221', accent: '#e16e5b', isDark: true },
  ocean: { name: 'Ocean', bg: '#0f172a', card: '#1e293b', accent: '#06b6d4', isDark: true },
  dracula: { name: 'Dracula', bg: '#282a36', card: '#44475a', accent: '#ff79c6', isDark: true },
  solarized: { name: 'Solarized', bg: '#fdf6e3', card: '#eee8d5', accent: '#cb4b16', isDark: false },
  forest: { name: 'Forest', bg: '#13241b', card: '#1c3629', accent: '#4ade80', isDark: true },
  monokai: { name: 'Monokai', bg: '#272822', card: '#3e3d32', accent: '#a6e22e', isDark: true },
  synthwave: { name: 'Synthwave', bg: '#2b213a', card: '#241b2f', accent: '#f92aad', isDark: true },
  nord: { name: 'Nord', bg: '#2e3440', card: '#3b4252', accent: '#88c0d0', isDark: true },
};

export function SettingsContent() {
  const { theme, setTheme, THEMES } = useTheme();
  const { settings, updateProfile } = useSettings();
  
  const [activeTab, setActiveTab] = useState('profile');
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Local state for profile inputs before saving
  const [profileForm, setProfileForm] = useState(settings.profile);

  // Update local form state when settings load from API
  React.useEffect(() => {
    setProfileForm(settings.profile);
  }, [settings.profile]);

  const handleProfileSave = async (e) => {
    e.preventDefault();
    await updateProfile(profileForm);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> }
  ];

  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-6 min-h-full relative">
      <header className="mb-8">
        <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">
          Settings
        </h1>
        <p className="text-[var(--text-secondary)] text-sm font-medium mt-1">Manage your account and preferences.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-[var(--bg-hover)] text-[var(--accent-color)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-input)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="bg-[var(--bg-card)] backdrop-blur-md p-8 rounded-2xl border border-[var(--border-color)] shadow-sm animate-fade-in">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">Public Profile</h2>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="w-24 h-24 rounded-full bg-[var(--bg-input)] border-2 border-dashed border-gray-300 flex items-center justify-center relative group cursor-pointer overflow-hidden"
                    onClick={() => setShowAvatarSelector(true)}
                  >
                    {profileForm.avatar ? (
                      <img src={profileForm.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl font-bold text-[var(--accent-color)]">
                        {profileForm.fullName ? profileForm.fullName.charAt(0).toUpperCase() : 'U'}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={24} className="text-white" />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-secondary)] cursor-pointer" onClick={() => setShowAvatarSelector(true)}>CHANGE AVATAR</span>
                </div>

                <form onSubmit={handleProfileSave} className="flex-1 flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={profileForm.fullName}
                      onChange={e => setProfileForm({...profileForm, fullName: e.target.value})}
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] focus:bg-[var(--bg-card)] focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-all text-[var(--text-primary)] cursor-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={profileForm.email}
                      onChange={e => setProfileForm({...profileForm, email: e.target.value})}
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] focus:bg-[var(--bg-card)] focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-all text-[var(--text-primary)] cursor-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Bio</label>
                    <textarea 
                      value={profileForm.bio}
                      onChange={e => setProfileForm({...profileForm, bio: e.target.value})}
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] focus:bg-[var(--bg-card)] focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] outline-none transition-all text-[var(--text-primary)] resize-none h-24 cursor-text"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button type="submit" className="px-6 py-2.5 rounded-xl text-white font-medium shadow-sm transition-all cursor-pointer hover:opacity-90 active:scale-95" style={{ backgroundColor: 'var(--btn-primary)' }}>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* APPEARANCE TAB */}
          {activeTab === 'appearance' && (
            <div className="bg-[var(--bg-card)] backdrop-blur-md p-8 rounded-2xl border border-[var(--border-color)] shadow-sm animate-fade-in">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">Appearance</h2>
              
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">Theme</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1 mb-6">Select your preferred color scheme. This will apply to both the Dashboard and the Notes view.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {THEMES.map(t => {
                    const details = THEME_DETAILS[t];
                    if (!details) return null;
                    const isActive = theme === t;
                    return (
                      <button 
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`flex flex-col gap-3 p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group focus:outline-none ${isActive ? 'border-[var(--accent-color)] shadow-md scale-[1.02]' : 'border-[var(--border-color)] hover:border-gray-400 hover:scale-[1.01]'}`}
                        style={{ backgroundColor: details.bg }}
                      >
                        {/* Fake UI preview */}
                        <div className="w-full h-24 rounded-lg relative overflow-hidden flex shadow-sm border border-black/10" style={{ backgroundColor: details.bg }}>
                           {/* Sidebar */}
                           <div className="w-1/3 h-full border-r border-black/10 flex flex-col gap-2 p-2" style={{ backgroundColor: details.card }}>
                              <div className="w-full h-2 rounded-full" style={{ backgroundColor: details.accent, opacity: 0.8 }} />
                              <div className="w-3/4 h-2 rounded-full" style={{ backgroundColor: details.isDark ? '#e5e3db' : '#222222', opacity: 0.3 }} />
                              <div className="w-1/2 h-2 rounded-full" style={{ backgroundColor: details.isDark ? '#e5e3db' : '#222222', opacity: 0.3 }} />
                           </div>
                           {/* Content */}
                           <div className="flex-1 p-3 flex flex-col gap-3" style={{ backgroundColor: details.bg }}>
                              <div className="w-1/2 h-2 rounded-full" style={{ backgroundColor: details.isDark ? '#e5e3db' : '#222222', opacity: 0.5 }} />
                              <div className="w-full h-2 rounded-full" style={{ backgroundColor: details.isDark ? '#e5e3db' : '#222222', opacity: 0.2 }} />
                              <div className="w-4/5 h-2 rounded-full" style={{ backgroundColor: details.isDark ? '#e5e3db' : '#222222', opacity: 0.2 }} />
                           </div>
                        </div>
                        
                        <div className="flex justify-between items-center w-full mt-1 px-1">
                          <span className="text-sm font-semibold tracking-wide" style={{ color: details.isDark ? '#e5e3db' : '#222222' }}>
                            {details.name}
                          </span>
                        </div>
                        
                        {/* Active Checkmark overlay */}
                        {isActive && (
                          <div className="absolute top-3 right-3 bg-[var(--accent-color)] text-white p-1 rounded-full shadow-md z-10 animate-scale-in">
                            <Check size={14} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Avatar Selector Modal */}
      {showAvatarSelector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setShowAvatarSelector(false)}>
          <div className="bg-[var(--bg-card)] p-6 rounded-2xl shadow-xl border border-[var(--border-color)] max-w-lg w-full m-4 relative animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Select Avatar</h3>
              <button onClick={() => setShowAvatarSelector(false)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer text-2xl font-light">&times;</button>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 max-h-80 overflow-y-auto custom-scrollbar p-2">
              {/* Fallback Initial Option */}
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer border-2 transition-all ${!profileForm.avatar ? 'border-[var(--accent-color)] scale-110 shadow-md' : 'border-transparent hover:scale-105 hover:shadow-sm'} bg-[var(--bg-input)]`}
                onClick={() => {
                  setProfileForm({ ...profileForm, avatar: '' });
                  setShowAvatarSelector(false);
                }}
              >
                <span className="text-2xl font-bold text-[var(--accent-color)]">
                  {profileForm.fullName ? profileForm.fullName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              
              {/* Prebuilt Avatars */}
              {PREBUILT_AVATARS.map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Avatar ${i}`} 
                  className={`w-16 h-16 rounded-full cursor-pointer border-2 transition-all bg-[var(--bg-hover)] ${profileForm.avatar === url ? 'border-[var(--accent-color)] scale-110 shadow-md' : 'border-transparent hover:scale-105 hover:shadow-sm'}`}
                  onClick={() => {
                    setProfileForm({ ...profileForm, avatar: url });
                    setShowAvatarSelector(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {saveSuccess && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl font-medium flex items-center gap-3 animate-bounce z-50">
          <div className="bg-white/20 p-1 rounded-full"><Check size={18} className="text-white" /></div>
          Profile updated successfully!
        </div>
      )}
    </div>
  );
}
