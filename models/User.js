const mongoose = require('mongoose');
const  UserSchema = new mongoose.Schema({
  googleId:{
    type:String,
    required:true
  },
  displayName:{
    type:String,
    required:true
  },
  firstname:{
    type:String,
    require:true
  },
  lastname:{
    type:String,
    require:true
  },
  image:{
    type:String,
  },
  C

})