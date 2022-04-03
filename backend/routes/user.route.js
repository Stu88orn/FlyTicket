const express = require('express');
const app = express();
const userRoute = express.Router();

//User model
let User = require('../models/user')

//Add user
userRoute.route('/create').post((req, res, next) => {
  User.create(req.body, (error , data) => {
    if (error){
      return next(error)
    }else{
      res.json(data)
    }
  })
})

//Get all users
userRoute.route('/').get((req, res, next) => {
  User.find((error, data) => {
    if (error){
      return next(error);
    }else{
      res.json(data)
    }
  })
})

//get Single User
userRoute.route('/read/:id').get((req,res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if(error){
      return next(error)
    }else{
      res.json(data);
      console.log("Data updated successfully")
    }
  })
})

//Update User
userRoute.route('/update/:id').put((req,res,next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error){
      return next(error);
      //console.log(error);
    }else{
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

//Delete user
userRoute.route('/delete/:id').delete((req,res,next) => {
  User.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }else{
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;
