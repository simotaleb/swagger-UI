'use strict';
   // Include our "db"
   var db = require('../../config/db')();
   // Exports all the functions to perform on the db
   module.exports = {getAll, save, getOne, update, delPerson};

   function test(){
     console.log('people.js functional');
   }
   function getAll(req, res, next) {
     res.json({ people: db.find()});
   }

   function save(req, res, next) {
       res.json({success: db.save(req.body), description: "person added to the list"});
   }

   function getOne(req, res, next) {
       var id = req.swagger.params.id.value; //req.swagger contains the path parameters
       var person = db.find(id);
       if(person) {
           res.json(person);
       }else {
           res.status(204).send();
       }
   }

   function update(req, res, next) {
       var id = req.swagger.params.id.value; //req.swagger contains the path parameters
       var person = req.body;
       if(db.update(id, person)){
           res.json({success: 1, description: "person updated!"});
       }else{
           res.status(204).send();
       }

   }

   function delPerson(req, res, next) {
       var id = req.swagger.params.id.value; //req.swagger contains the path parameters
       if(db.remove(id)){
           res.json({success: 1, description: "Person deleted!"});
       }else{
           res.status(204).send();
       }

   }
