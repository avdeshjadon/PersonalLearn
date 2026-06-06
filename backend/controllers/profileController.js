import mongoose from 'mongoose';

// Since we have a single user app, we'll just maintain one profile document
// We'll use a fixed ID or just fetch the first document in the collection

const getProfileCollection = () => mongoose.connection.db.collection('profiles');

export const getProfile = async (req, res) => {
  try {
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const collection = getProfileCollection();
    let profile = await collection.findOne({});
    
    // If no profile exists, create a default one
    if (!profile) {
      const defaultProfile = {
        fullName: 'User',
        email: '',
        bio: '',
        avatar: '',
        createdAt: new Date()
      };
      const result = await collection.insertOne(defaultProfile);
      profile = { _id: result.insertedId, ...defaultProfile };
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, bio, avatar } = req.body;
    const db = mongoose.connection.db;
    if (!db) return res.status(500).json({ error: 'Database not initialized' });

    const collection = getProfileCollection();
    
    // Update the first/only document
    const result = await collection.findOneAndUpdate(
      {}, // matches any document (the first one)
      { 
        $set: { 
          fullName, 
          email, 
          bio,
          avatar,
          updatedAt: new Date()
        } 
      },
      { returnDocument: 'after', upsert: true }
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
