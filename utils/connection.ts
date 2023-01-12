import mongoose, {ConnectOptions} from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        } as ConnectOptions);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};