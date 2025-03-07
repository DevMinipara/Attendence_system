import mongoose from "mongoose";

const MONGODB_URL = "mongodb+srv://attedancesystem:attedancesystem@attedancesystem.rmhof.mongodb.net/?retryWrites=true&w=majority&appName=attedancesystem";

const connectDb = async () => 
{
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Database is connected");
    } catch (error) {
        console.log("Database is not connected");
    }
};
export default connectDb;
