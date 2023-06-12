import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  catch (e) {
    console.error(e)
    throw e
  }
};