let express = require('express'),
    patientRouter = express.Router(),
    mongoose = require('mongoose')


const jwt = require('jsonwebtoken');


require("../Models/patientInfoModel");
require("../Models/doctorModel");
require("../Models/patientDiagnosisModel");


let patientInfoSchema = mongoose.model("PatientInfo"),
    doctorSchema = mongoose.model("Doctor"),
    patientDiagnosisSchema = mongoose.model("patientvisit")




var clinicID = 0;
patientRouter.use(function (request, response, next) {
    var theResult = { status: 1, data: [] };
    if (request.headers.authorization != null) {
        var requestF = jwt.decode(request.headers.authorization);
        clinicID = requestF.clinicID;
        patientID = requestF.id;

        if (requestF.role != 4) {
            response.send({ status: -1 });
        }
        next();
    } else {
        response.send({ status: -1 });
    }
});




// patientRouter.get("/patient/profile", (request, response) => {
//     console.log(patientID);
//     patientInfoSchema.aggregate([
//         {
//             $match: {
//                 _id: Number(patientID) // create a new number object
//             }
//         },
//         {
//             $lookup: {
//                 from: "patientvisits",
//                 localField: "_id",
//                 foreignField: "Patient",
//                 as: "patientDiagnosis"
//             }
//         }
//     ]).then(data => {
//         response.send({ status: 1, data:data });
//     }).catch(error => {
//         response.send({ status: 0, error });
//     }) /*can't find*/
// });

patientRouter.get("/patient/profile", (request, response) => {
    patientInfoSchema.find({ _id: patientID }).then((data) => {
        response.send({ status: 1, data: data });
    }).catch(function () {
        response.send({ status: 0 });
    });/*can't find*/
})


patientRouter.get("/patient/profile/visits", (request, response) => {
    patientDiagnosisSchema.find({ Patient: patientID }).populate({ path: 'Doctor' })
    .then((data) => {
        response.send({ status: 1, data: data });
    }).catch(function () {
        response.send({ status: 0 });
    });/*can't find*/
})






module.exports = patientRouter;