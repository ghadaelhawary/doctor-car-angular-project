let mongoose = require("mongoose");
const validator = require('validator');



//Create PatientInfoSchema
let PatientInfoSchema=new mongoose.Schema({
    Name:{type: String},
    DateOfBirth: {type:String },
    Gender:String,
    NID:{
        type:Number,
        required:true
    },
    Password: {
        type: String,
        required: true
    },
    ProfileCreationDate:{
       type:String
    },
    
    Clinic:{type:String /*mongoose.Schema.Types.ObjectId*/, ref: 'Clinic'}
});


//mapping
mongoose.model("PatientInfo", PatientInfoSchema)