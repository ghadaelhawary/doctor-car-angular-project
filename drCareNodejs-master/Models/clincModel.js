let mongoose=require("mongoose");



//Create PatientInfoSchema
let ClinicSchema=new mongoose.Schema({
    Name:String
});


//mapping
mongoose.model("Clinic",ClinicSchema)