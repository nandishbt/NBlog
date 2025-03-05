import mongoose from 'mongoose';

export const connectDb = async () =>{
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB successfully`);
        
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
        
    }
}

