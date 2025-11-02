import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('🟢 Using existing MongoDB connection');
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('❌ MONGODB_URI not defined in .env.local');

  await mongoose.connect(uri);
  console.log('🟢 MongoDB connection established');
  return mongoose.connection;
};

export default connectToDatabase;
