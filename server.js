const express = require("express");
const cors = require("cors");

const connectDB = require("../config/db");
const authRoutes = require("../routes/auth");

const app = express();

/* connect database */
connectDB();

/* CORS (allow all) */
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

/* body parsing */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* routes */
app.use("/api/auth", authRoutes);

/* test route */
app.get("/", (req,res)=>{
  res.json({message:"API running"});
});

/* export instead of listen */
module.exports = app;