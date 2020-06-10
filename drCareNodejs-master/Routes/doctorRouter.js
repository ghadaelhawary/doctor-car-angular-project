let express = require("express"),
    doctorRouter = express.Router(),
    mongoose = require("mongoose")


const jwt = require('jsonwebtoken');


require("../Models/patientInfoModel");
require("../Models/doctorModel");
require("../Models/patientDiagnosisModel");

let patientInfoSchema = mongoose.model("PatientInfo"),
    doctorSchema = mongoose.model("Doctor"),
    patientDiagnosisSchema = mongoose.model("patientvisit");



//from admin model

// doctorRouter.use(function (request, response, next) {    
//     var theResult = {status:-1,data:[]};
//     if(request.headers.authorization != null){

//         var requestF = jwt.decode(request.headers.authorization);
//         if(requestF == null){            
//             theResult.status = -1;
//         }else{

//             if(requestF.role != 2){                                
//                 theResult.status=-1;
//             }else{
//                 theResult.status=1;
//                 next();
//             }

//         }/*token was tampered*/
//     }

//     if(theResult.status==-1){
//         response.send(theResult);
//     }

// });


var clinicID = 0;
var doctorId;
doctorRouter.use(function (request, response, next) {
    var theResult = { status: 1, data: [] };
    if (request.headers.authorization != null) {
        var requestF = jwt.decode(request.headers.authorization);
        clinicID = requestF.clinicID;
        doctorId = requestF.id;
        if (requestF.role != 2) {
            response.send({ status: -1 });
        }
        next();
    } else {
        response.send({ status: -1 });
    }
});


/* Original*/

// doctorRouter.use(function (request, response, next) {    
//     var theResult = {status:-1,data:[]};
//      const a = JSON.parse(JSON.stringify(request.body));
//     if(a.token != null){

//          var requestF = jwt.decode(a.token); 
//         //var requestF = jwt.decode(request.body.token); 

//         if(requestF == null){            
//             theResult.status = -1;
//         }else{

//             if(requestF.role != 2){                                
//                 theResult.status=-1;
//             }else{
//                 theResult.status=1;
//                 next();
//             }

//         }/*token was tampered*/
//     }

//     if(theResult.status==-1){
//         response.send(theResult);
//     }

// });





doctorRouter.route("/patients")
    .get((request, response) => {
        patientInfoSchema.find({ Clinic: clinicID }).then((data) => {
            // response.send(data)
            response.send({ status: 1, data: data });
        }).catch((error) => {
            response.send({ status: 0, msg: error.errmsg });
        });/*can't find*/
    });/*get*/


doctorRouter.route("/patients/details/:_id")
    .get((request, response) => {
        patientInfoSchema.findOne({ _id: request.params._id }).then((data) => {
            response.send({ status: 1, data: data });
        }).catch((error) => {
            response.send({ status: 0, msg: error.errmsg });
        });/*catch*/
    });/*details*/


/* try to aggregate 
*******************************************************************************
*******************************************************************************
*/

// doctorRouter.get("/patients/details/:_id",(request,response)=>{
//     patientInfoSchema.aggregate([
//         {
//             $match:{
//                 _id: ObjectId(request.params._id)
//             }
//         },
//         {
//             $lookup:{
//                 from:"patientvisit",
//                 localField:"_id",
//                 foreignField:"Patient",
//                 as:"patientObject"
//             }
//         }
//     ]).then((data)=>{
//         console.log(data)
//         console.log("kkkkkkkkkkkkkkkkk")
//         response.send({status:1,data:data})
//     }).catch((error)=>{
//         response.send(error)
//     })
// })

/*
********************************************************************************
********************************************************************************
*/



doctorRouter.route("/patients/visits/:_id")
    .get((request, response) => {
        patientDiagnosisSchema.find({ Patient: request.params._id }).populate({ path: "Doctor" })
            .then((patientVisits) => {
                response.send({ status: 1, visits: patientVisits });
            }).catch((error) => {
                response.send(error);
            });/*catch*/
    }).post((request, response) => {
        // var a = JSON.stringify(request.body);
        let a = request.body;
        console.log(a)


        let patientID = request.params._id;

        var newData = {
            "Patient": patientID,
            "Pressure": a.Pressure,
            "Diabetes": a.Diabetes,
            "Diagnosis": a.Diagnosis,
            "DiagnosisDate": a.DiagnosisDate,
            "Recommendations": a.Recommendations,
            "Medicines": a.Medicines,
            "Doctor": doctorId,
            "RevisitDate": a.RevisitDate
        };/*newData*/

        console.log(doctorId)

        let visit = new patientDiagnosisSchema(newData);
        visit.save().then(data => {
            response.send({ status: 1, data });
        }).catch(err => {
            response.send({ status: 0, ddd: 'ddd', msg: err.errmsg });
        });/*catch*/
    });/*post*/



doctorRouter.get("/patients/visits/details/:_id", (request, response) => {
    patientDiagnosisSchema.findOne({ _id: request.params._id }).populate({ path: "Patient Doctor" })
        .then((data) => {
            response.send({ status: 1, visit: data })
        }).catch((error) => {
            response.send(error)
        })
});




module.exports = doctorRouter;



