const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors"); 
const app = express();

app.use(express.json());
app.use(cors());  

// MongoDB Connection
mongoose.connect("mongodb+srv://kritikkumar:kritik1234@cluster0.9wat1r4.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
app.use("/students", studentRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
