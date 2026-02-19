const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async(req, res)=>{
    try{
        const {First_Name, Email} = req.body;

        const sql = "INSERT INTO `sign_up`(`First_Name`, `Email`) VALUES (?, ?)"
        const result = await db.query(sql, [First_Name, Email])
        res.json({success:true, id:result.insertId});
    }
    catch(err){
        res.status(500).json({error:err.sign_up})
    }
})

app.get("/", async(req, res)=>{
    try{
        const [rows] = await db.query("SELECT * FROM `sign_up` WHERE 1")
        res.json(rows)
    }catch(err){
        res.status(500).json({error:err.sign_up})
    }
})

app.listen(5000, ()=>{
    console.log("listening on port http://localhost:5000")
})