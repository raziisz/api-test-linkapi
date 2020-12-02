import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URL_CONNECTION = process.env.MONGO_URL;

export const connect = async () => {
  await mongoose.connect(URL_CONNECTION, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

}

export const disconnect = async () => mongoose.connection.close();