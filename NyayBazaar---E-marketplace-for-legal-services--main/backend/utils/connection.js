import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
    await mongoose.connect(
        `mongodb+srv://imran:imran6465@database-project.bxbdfvz.mongodb.net/`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );
}

export async function disconnect() {
    await mongoose.disconnect();
}
