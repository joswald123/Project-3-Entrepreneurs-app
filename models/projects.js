const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    index: { type: Number, required: true },
    projectName: { type: String, required: true },
    ideatorName: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
    Cost: { type: Number, required: true },
  
  });
  
  
  const Project = mongoose.model("Project", ProjectSchema);
  
  module.exports = Project;
