const app = require("./app.js");
const config = require("./app/config");
const mongoose = require("mongoose");


// connect to database 
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Connected to the datebase!");
    })
    .catch((error) => {
        console.log("Cannot connect to the database!", error);
        process.exit();
    });

//start server
const PORT = config.app.port;
  app.listen(PORT, () =>{
      console.log(`Server is running on port ${PORT}.`);
});