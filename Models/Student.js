import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:String,
    Class:String,
    age:Number
})
export const StudentModel=mongoose.model("students",studentSchema)