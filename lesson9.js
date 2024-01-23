import router from "./router/router.js";
import express from "express";
import { connectDb } from "./DB/connectDb.js";
import cors from "cors";



const app = express();
app.use(express.json());
app.use(cors())

connectDb();

app.use("/api/student", router);



app.use((err, req, res, next) => {
    let statusCode = res.statusCode || 400;
    let message = err.message || "התרחשה תקלה בשרת";
    res.status(statusCode).send(message);
})


app.listen(5000, function () { console.log("app is listening on port 5000") });







// let arr = [
//     { id: 1, name: "sara", class: "A" },
//     { id: 3, name: "tamar", class: "D" },
//     { id: 4, name: "pola", class: "C" }
// ]
// app.get("/students", (req, res) => {
//     res.json(arr)
// })
// app.get("/student/:id", (req, res) => {
//     let index = arr.findIndex(item => item.id == req.params.id);
//     if (index === -1)
//         res.status(404).send('no student with such parameter id')
//     res.json(arr[index])
// })
// app.delete("/student/:id", (req, res) => {
//     let index = arr.findIndex(item => item.id == req.params.id);
//     if (index === -1)
//         res.status(404).send('no student with such parametr id')
//     let deleteStudent=arr[index];
//     arr.splice(index, 1)
//     res.json(deleteStudent)
// })
//     app.put("/student/:id", (req, res) => {
//     let index = arr.findIndex(item => item.id == req.params.id);
//     if (index == -1)
//         res.status(404).send('no student with such parametr id')
//         if (arr.length > 0) {
//             arr[index].id = arr[arr.length - 1].id + 1;
//         } else {
//             arr[index].id = 1;
//         }
//     arr[index].name=req.body.name||arr[index].name;
//     arr[index].class=req.body.class||arr[index].class;
//     res.json(arr[index])
// })

//     app.post("/", (req, res) => {
//         if (arr.length > 0) {
//             req.body.id = arr[arr.length - 1].id + 1;
//         } else {
//             req.body.id = 1;
//         }
//         arr.push(req.body);
//         res.json(req.body);
//     });

