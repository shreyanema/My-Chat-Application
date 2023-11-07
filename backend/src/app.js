const express = require('express');
const app = express();
const session = require("../src/middleware/session");
const authRoutes = require("./routes/user");
require("../src/db/conn");

//port setting
const port = process.env.PORT || 5001;
app.use(session);
app.use(express.json());
//handling route request
app.use("/api", authRoutes);

//Start Server
app.listen(port,() =>{
    console.log(`Server running on ${port}`);

});
//response on server
app.get("/",(req,res) => {
    res.send("Hello, This is your backend server");

});




