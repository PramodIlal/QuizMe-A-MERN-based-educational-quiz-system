
import mongoose from 'mongoose';

export default async function connect() {
    try {
        // Try to connect to the database
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        // If there's an error, log it and throw it for further handling
        console.error("Database connection error:", error.message);
        throw new Error("Database connection failed");
    }
}
