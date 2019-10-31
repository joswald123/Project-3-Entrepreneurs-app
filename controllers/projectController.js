const db = require("../models");

// Defining methods for the booksController
module.exports = {

   findAll: function (req, res) {
       db.Project
        .find(req. query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
   }, 
    
   create: function (req, res) {
       db.Project
       .create(req.body)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   }
}
