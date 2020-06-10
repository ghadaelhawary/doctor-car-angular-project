let mongoose=require("mongoose");



//Create adminSchema
let AdminSchema=new mongoose.Schema({
    NID:Number,
    Password:String

});




//mapping
mongoose.model("Admin",AdminSchema)