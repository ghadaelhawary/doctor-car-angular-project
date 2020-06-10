let express = require("express"),
    mongoose = require("mongoose"),
    authRouter = express.Router()



const jwt = require('jsonwebtoken');

require("../Models/adminModel")
require("../Models/patientInfoModel");
require("../Models/clinicSupervisorModel");
require("../Models/doctorModel");

let adminSchema = mongoose.model("Admin")
let patientInfoSchema = mongoose.model("PatientInfo");
let clinicSupervisorSchema = mongoose.model("clinicsupervisor");
let doctorSchema = mongoose.model("Doctor")



authRouter.post("/login", async (request, response) => {
    /***************************
    # Step (1) : Detect Role.
    ***************************/
    var theSchema = null;
    if (request.body.Role == "1") {
        theSchema = adminSchema;
    }
    else if (request.body.Role == "2") {
        theSchema = doctorSchema;
    } else if (request.body.Role == "3") {
        theSchema = clinicSupervisorSchema;
    } else if (request.body.Role == '4') {
        theSchema = patientInfoSchema;
    }/**/

    /************************
    # Step(2): Find or fail.
    ************************/
    const NIDExists = await theSchema.findOne({ NID: request.body.NID });

    if (!NIDExists) {
        return response.status(400).send(`nationalId doen't exists `)
    }
    else {
        theSchema.findOne({ NID: request.body.NID }).then(data => {
            var theResult = { status: 0 };
            if (data.NID == request.body.NID && data.Password == request.body.Password) //decrypt and compare password
            {
                if (request.body.Role == 1) {
                    var theData = { id: data._id, role: request.body.Role };
                } else {
                    var theData = { id: data._id, clinicID: data.Clinic, role: request.body.Role };
                }

                let x = jwt.sign(theData, 'secretkey', { expiresIn: '1h', algorithm: "HS256" });
                theResult = { status: 1, token: x };
            }/*correct info*/
            response.json(theResult);
        }).catch(function (ee) {
            response.send(ee);
        });/*then*/
    }

});/*login route*/





module.exports = authRouter;

