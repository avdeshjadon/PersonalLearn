import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import useSettings from '../../hooks/useSettings';
import { User, Moon, Camera, Check } from 'lucide-react';

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

export function SettingsContent() {
  const { isDark, toggleDark } = useTheme();
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
    { id: 'appearance', label: 'Appearance', icon: <Moon size={18} /> }
  ];

  const ToggleSwitch = ({ checked, onChange }) => (
    <button 
      onClick={onChange}
      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ease-in-out cursor-pointer focus:outline-none ${checked ? 'bg-[#D97757]' : 'bg-gray-200'}`}
    >
      <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm transition-all duration-300 ease-in-out cursor-pointer ${checked ? 'left-[26px]' : 'left-[2px]'}`} />
    </button>
  );

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
                  ? 'bg-orange-50 text-[#D97757]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
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
                    className="w-24 h-24 rounded-full bg-[var(--bg-secondary)] border-2 border-dashed border-gray-300 flex items-center justify-center relative group cursor-pointer overflow-hidden"
                    onClick={() => setShowAvatarSelector(true)}
                  >
                    {profileForm.avatar ? (
                      <img src={profileForm.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl font-bold text-[#D97757]">
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
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all text-[var(--text-primary)] cursor-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={profileForm.email}
                      onChange={e => setProfileForm({...profileForm, email: e.target.value})}
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all text-[var(--text-primary)] cursor-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">Bio</label>
                    <textarea 
                      value={profileForm.bio}
                      onChange={e => setProfileForm({...profileForm, bio: e.target.value})}
                      className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:bg-[var(--bg-primary)] focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757] outline-none transition-all text-[var(--text-primary)] resize-none h-24 cursor-text"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button type="submit" className="px-6 py-2.5 rounded-xl text-white font-medium shadow-sm transition-all cursor-pointer hover:bg-orange-600 active:scale-95" style={{ backgroundColor: '#D97757' }}>
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
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">Dark Mode</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">Switch between light and dark themes.</p>
                  </div>
                  <ToggleSwitch checked={isDark} onChange={toggleDark} />
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
                className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer border-2 transition-all ${!profileForm.avatar ? 'border-[#D97757] scale-110 shadow-md' : 'border-transparent hover:scale-105 hover:shadow-sm'} bg-[var(--bg-secondary)]`}
                onClick={() => {
                  setProfileForm({ ...profileForm, avatar: '' });
                  setShowAvatarSelector(false);
                }}
              >
                <span className="text-2xl font-bold text-[#D97757]">
                  {profileForm.fullName ? profileForm.fullName.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              
              {/* Prebuilt Avatars */}
              {PREBUILT_AVATARS.map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Avatar ${i}`} 
                  className={`w-16 h-16 rounded-full cursor-pointer border-2 transition-all bg-orange-50 ${profileForm.avatar === url ? 'border-[#D97757] scale-110 shadow-md' : 'border-transparent hover:scale-105 hover:shadow-sm'}`}
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
