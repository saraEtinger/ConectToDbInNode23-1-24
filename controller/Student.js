import { StudentModel } from "../Models/Student.js";
import mongoose from "mongoose";



export const getAllStudents = async (req, res) => {
    try {
        let arr = await StudentModel.find({})
        res.json(arr)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export const getStudentById = async (req, res) => {
    let { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(404).send("is not valid format")
    try {
        let data = await StudentModel.findOne({ _id: id })
        if (!data)
            return res.status(404).send("student with such id not found")
        res.json(data)
    } catch (err) {
        res.status(400).json(err)
    }
}
export const addStudent = async (req, res) => {
    let { name, Class, age } = req.body;
    if (!name || !Class || !age)
        return res.status(404).send("missing parametrs in body:name/Class/age")
    try {
        let sameStudent = await StudentModel.findOne({ name: name, Class: Class, age: age });
        if (sameStudent)
            return res.status(409).send("student with sum details already exists")
        let newStudent = new StudentModel(req.body);
        await newStudent.save()
        return res.status(201).json(newStudent)

    }
    catch (err) {
        res.status(400).json(err)

    }
}
export const deleteStudent = async (req, res) => {
    let id = req.params.id;
    if (!mongoose.isValidObjectId(id))
        return res.status(404).send("is not valid format")
    try {
        let deletedStudent = await StudentModel.findByIdAndDelete(id);
        if (!deletedStudent)
            return res.status(404).send("no student with such parametrs to delete")
        return res.status(200).json(deletedStudent)
    }
    catch (err) {
        return res.status(400).json(err)
    }
}
export const updateStudent = async (req, res) => {
    let id = req.params.id;
    if (!mongoose.isValidObjectId(id))
        return res.status(404).send("is not valid format")
    // let { name, Class, age } = req.body;
    try {
        let studentToUpdate = await StudentModel.findByIdAndUpdate(id, req.body)
        if (!studentToUpdate)
            return res.status(404).send("no student with such parametrs to update")
        return res.status(200).json(studentToUpdate)
    }
    catch (err) {
        res.status(400).send(err)

    }

}
