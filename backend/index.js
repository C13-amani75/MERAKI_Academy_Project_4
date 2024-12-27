const express = require("express");
const cors = require("cors");
const db = require("./models/db")
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
//routers
const {userRouter} = require("./routes/user")
const{roleRouter} = require("./routes/role")
const {categoryRouter} = require("./routes/category")

// Handles any other endpoints [unassigned - endpoints]
app.use("/users",userRouter)
app.use("/roles",roleRouter)
app.use("/category",categoryRouter)
app.use(cors());


app.use("*", (req, res) => res.status(404).json("NO content at this path"));
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
