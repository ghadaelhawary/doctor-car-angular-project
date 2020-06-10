let mongoose=require("mongoose");
const validator = require('validator');

let clinicSupervisorSchema=new mongoose.Schema({
  NID:{
    type:Number,
    required:true,
    // validate: [validator.isNumeric,"enter valid NID"]
},
Password:{
  type:String,
  required:true
},
Name:{
  type:String,
  required:true,
  // validate: [validator.isAlpha,"enter valid NAME"]
},
  Clinic:{type:String/*mongoose.Schema.Types.ObjectId*/, ref: 'Clinic'}
  
});/*end model*/



mongoose.model("clinicsupervisor",clinicSupervisorSchema);