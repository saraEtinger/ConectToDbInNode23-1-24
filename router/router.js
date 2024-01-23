import express from "express";

import {updateStudent,deleteStudent,addStudent,getStudentById,getAllStudents} from "../controller/Student.js"


const router=express.Router();

router.get("/",getAllStudents)

router.get("/:id", getStudentById)

router.post("/",addStudent)

router.delete("/:id",deleteStudent)

router.put("/:id",updateStudent)

// module.exports = router;

export default router;