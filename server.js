const express = require("express");
const morgan = require("morgan");
const mongoose = require ("mongoose");
const path = require("path");
const apiRoutes = require("./routes/api/projects");

const app = express();

// Settings
const PORT = process.env.PORT || 3005;


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}


// Routes
app.use('/api/projects',require('./routes/api/projects'));

// Conect to Mongoose

mongoose.connect('mongodb://localhost/entrepreneurs-projects', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});

 app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Starting the server

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
