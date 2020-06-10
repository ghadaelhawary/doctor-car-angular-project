let express = require("express"),
    clinicSupervisorRouter = express.Router(),
    //path=require("path"),
    mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

require("../Models/patientInfoModel");
require("../Models/clinicSupervisorModel");

let patientInfoSchema = mongoose.model("PatientInfo");
let clinicsupervisorSchema = mongoose.model("clinicsupervisor");



/*
# Repeat for permissions.
*/

// var clinicID=0;
// clinicSupervisorRouter.use(function (request, response, next) {    
//     var theResult = {status:-1,data:[]};
//     const a = JSON.parse(JSON.stringify(request.body));
//     if(a.token != null){

//         var requestF = jwt.decode(a.token); 
//         //console.log(requestF)
//         if(requestF == null){            
//             theResult.status = -1;
//         }else{

//             if(requestF.role != 3){                                
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


// /* Original */
var clinicID = 0;

clinicSupervisorRouter.use(function (request, response, next) {
    var theResult = { status: 1, data: [] };
    if (request.headers.authorization != null) {
        var requestF = jwt.decode(request.headers.authorization);
        clinicID = requestF.clinicID;
        if (requestF.role != 3) {
            response.send({ status: -1 });
        }
        next();
    } else {
        response.send({ status: -1 });
    }
});




clinicSupervisorRouter.route("/patients")
    .get((request, response) => {
        patientInfoSchema.find({ Clinic: clinicID }).then((data) => {
            response.send({ status: 1, data: data });
        }).catch(function (error) {
            response.send(error);
        });/*can't find*/

    }).post((request, response) => {
        nid=request.body.NID
        var r = { status: 1 };

        patientInfoSchema.findOne({NID:nid}).then((data)=>{
          if(!data)
          {
            let patient = new patientInfoSchema({
                Name: request.body.Name,
                // Age: request.body.Age,
                DateOfBirth: request.body.DateOfBirth,
                Gender: request.body.Gender,
                NID: request.body.NID,
                Password: request.body.Password,
                ProfileCreationDate: request.body.ProfileCreationDate,
                Clinic: clinicID
            });
            patient.save().then(data => {
                r.status = 1;
            }).catch(err => {
                r.status = 0;
                r.errors = err;
            });
          }    

          if(data)
          {
              response.send({status:-2})
          }
        })
    })
    .put((request, response) => {
        var theResult = { status: 0, msg: '' };
        var t = request.body;

        patientInfoSchema.updateOne(
            { NID: t.NID }, { Name: t.Name, DateOfBirth: t.DateOfBirth, Gender: t.Gender, NID: t.NID, Password: t.Password })
            .then((data) => {
                theResult.status = 1;
                response.send(theResult);
            }).catch((err) => {
                theResult.msg = err.errmsg;
                response.send(theResult);
            });
        // response.send(theResult);
    }).delete((request, response) => {

        let patient;
        patientInfoSchema.findOne({ NID: request.body.NID }).then((data) => {
            patient = data;
        });

        patientInfoSchema.deleteOne({ NID: request.body.NID }, (err) => {
            var theResult = { status: 1, msg: '' };
            if (err) {
                theResult.status = 0;
            }/*no error*/
            response.send(theResult);
        });/*deleteOne*/
    });/*route: delete*/

clinicSupervisorRouter.get("/patients/details/:NID", (request, response) => {
    var theResult = { status: 0, msg: '' };
    patientInfoSchema.findOne({ NID: request.params.NID }).then(data => {
        response.send({ status: 1, data: data });
    }).catch(error => {
        response.send({ status: 0, msg: error });
    });
});/**/

module.exports = clinicSupervisorRouter;
