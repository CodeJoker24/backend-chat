const express = require("express");
const cors = require("cors");
const db = require("./lib/db"); 
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/auth_routes")
const messageRoutes = require("./routes/messages")

// const allowOrigins = [
//     "http://localhost:5173/",
//     "https://frontend-chat-orcin.vercel.app/"
// ]


app.use(cors());
// app.options("", cors())
app.use(express.json());
app.use("/api/auth_routes", authRoutes)
app.use("/api/messages", messageRoutes)


app.get("/", (req, res)=>{
    res.send("App is running!")
});



app.listen(PORT, ()=>{
    console.log(`listening on port http://127.0.0.1:${PORT}`)
})