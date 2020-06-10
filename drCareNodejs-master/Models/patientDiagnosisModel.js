let mongoose = require("mongoose");



//Create PatientInfoSchema
let PatientDiagnosisSchema = new mongoose.Schema({

    DiagnosisDate: String,
    RevisitDate: String,

    // _id:Number,
    Pressure: String,
    Diabetes: String,
    Diagnosis: String,
    Recommendations: [{ RecommendationName: String }],
    Medicines: [{ medicineName: String, medicineHowToUse: String, medicineForHowLong: String }],
    Patient: { type: String, ref: 'PatientInfo' },     //{type:String /*mongoose.Schema.Types.ObjectId*/, ref: 'Clinic'}  
    Doctor: { type: String, ref: 'Doctor' },
});


//mapping  
mongoose.model("patientvisit", PatientDiagnosisSchema);  