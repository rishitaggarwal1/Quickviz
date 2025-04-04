import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log("MongoDB connected successfully!");
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. "+err);
            process.exit();
        })

    }
    catch (error)
    {
        console.log("Something went wrong with DB Connection!");
        console.log(error);
    }
}