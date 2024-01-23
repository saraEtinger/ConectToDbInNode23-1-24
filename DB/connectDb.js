import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/13-1-2024")
        .then(suc => {
            console.log("mongoDB connected" + suc.connection.db);
        }).catch(err => {
            console.log("cannot connect mongoDB");
            console.log(err)
            process.exit(1);
        })
}