let mongoose=require("mongoose");
const validator = require('validator');





//Create DoctorSchema
let doctorSchema=new mongoose.Schema({
    NID:{
        type: Number /*validate: [validator.isNumeric,"enter valid NID"]},*/},
     Password:String,
     Name:
   {  type: String  /*validate: [validator.isAlpha,"enter valid NAME"]},*/},
     Department:String,
    Clinic:{type:String /*mongoose.Schema.Types.ObjectId*/, ref: 'Clinic'}

});




//mapping
mongoose.model("Doctor",doctorSchema);