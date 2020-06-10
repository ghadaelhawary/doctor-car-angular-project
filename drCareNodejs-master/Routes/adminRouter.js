let express=require("express"),
    adminRouter=express.Router(),
    mongoose=require("mongoose")
const jwt = require('jsonwebtoken');

require("../Models/clincModel")
require("../Models/clinicSupervisorModel")
require("../Models/doctorModel")


let clincSchema=mongoose.model("Clinic")
let clinicSupervisorSchema=mongoose.model("clinicsupervisor")
let doctorSchema=mongoose.model("Doctor")


adminRouter.use(function (request, response, next) {    
    var theResult = {status:-1,data:[]};
    if(request.headers.authorization != null){
        
        var requestF = jwt.decode(request.headers.authorization);
        if(requestF == null){            
            theResult.status = -1;
        }else{
            
            if(requestF.role != 1){                                
                theResult.status=-1;
            }else{
                theResult.status=1;
                next();
            }
            
        }/*token was tampered*/
    }

    if(theResult.status==-1){
        response.send(theResult);
    }

});





// adminRouter.use(function (request, response, next) {    
//     var theResult = {status:1,data:[]};
//     if(request.headers.authorization != null){
//         var requestF = jwt.decode(request.headers.authorization);    
//         if(requestF.role != 3){            
//             response.send({status:-1});
//         }
//         next();
//     }else{
//         response.send({status:-1});
//     }
// });







adminRouter.get("/",(request,response)=>{
    response.send("Admin Home Page");
});/**/

/****************************************
    # (1) : CRUD Opertation Of Doctor
*****************************************/
adminRouter.route("/clinic")

.get((request,response)=>{    
    clincSchema.find({}).then((data)=>{
        response.send({status:1,data:data});
    }).catch((error)=>{
        response.send({status:0});
    });/*catch*/    
})/*get*/
.post((request,response)=>{
    let clinic=new clincSchema({Name:request.body.Name});    
    clinic.save().then(data=>{
        response.send({status:1});
    }).catch(err=>{
       response.send({status:0,msg:err.errmsg});
   });/*catch*/   
})/*post*/
.put((request,response)=>{
    var m = request.body;    
   clincSchema.updateOne({_id:m._id},{Name:request.body.Name})
       .then((data)=>{
           response.send({status:1});
       }).catch((err)=>{
           response.send({status:0,msg:err.errmsg});
       });/*catch*/       
})/*put*/
.delete((request,response)=>{    
   let clinic;
   clincSchema.findOne({_id:request.body._id}).then(data=>{
       clinic=data;
   });
    
    clincSchema.deleteOne({_id:request.body._id},(err)=>{
        if(err){
            response.send({status:0,msg:err.errmsg});
        }else{
            response.send({status:1});
        }
    });/*removed*/
});/*delete*/

adminRouter.get("/clinic/details/:_id",(request,response)=>{
    clincSchema.findOne({_id:request.params._id}).then((data)=>{
        response.send({status:1,data:data})
    }).catch(error=>{
        response.send(error)
    })
})


adminRouter.get("/clinic/details/:_id/:s",(request,response)=>{
    console.log(request.params)
    var theResult = {status:0,msg:''};
    if(request.params.s=="d")
    {
     doctorSchema.find({Clinic:request.params._id}).then(data=>{
        response.send(data);
    }).catch(error=>{       
        response.send({status:0,msg:error.errmsg});
    });
}
if(request.params.s=="s")
{
    clinicSupervisorSchema.find({Clinic:request.params._id}).then(data=>{
        response.send(data);
    }).catch(error=>{
        response.send({status:0,msg:error.errmsg})
    })
}
});


adminRouter.post("/clinic/doctor/add/:_id",(request,response)=>{
    nid=request.body.NID
    id=request.params._id
    doctorSchema.findOne({NID:nid}).then((data)=>{
        if(!data){
            
let doctor=new doctorSchema({
    NID:request.body.NID,
    Password:request.body.Password,
    Name:request.body.Name,
    Department:request.body.Department,
    Clinic:id
});

doctor.save().then(data=>{
   response.send({status:1});
}).catch(err=>{
   response.send({status:0,msg:err.errmsg});
});

        }
        if(data){
           response.send({status:-2})
        }

    })

   

    
})

adminRouter.post("/clinic/supervisor/add/:_id",(request,response)=>{
    nid=request.body.NID
    id=request.params._id
    clinicSupervisorSchema.findOne({NID:nid}).then((data)=>{
        if(!data){
            
let supervisor=new clinicSupervisorSchema({
    NID:request.body.NID,
    Password:request.body.Password,
    Name:request.body.Name,
    Clinic:id
});

supervisor.save().then(data=>{
   response.send({status:1});
}).catch(err=>{
   response.send({status:0,msg:err.errmsg});
});

        }
        if(data){
           response.send({status:-2})
        }

    })

   

    
})


/****************************************
    # (1) : CRUD Opertation Of Doctor
*****************************************/
adminRouter.route("/doctor")
    .get((request,response)=>{
        doctorSchema.find({}).then((data)=>{
            response.send({status:1,data:data});
        }).catch((error)=>{
            response.send({status:0,msg:error.errmsg});
        });/*catch*/

    })
    // .post((request,response)=>{
//         nid=request.body.NID
//         doctorSchema.findOne({NID:nid}).then((data)=>{
//             if(!data){
                
//     let doctor=new doctorSchema({
//         NID:request.body.NID,
//         Password:request.body.Password,
//         Name:request.body.Name,
//         Department:request.body.Department,
//         Clinic:request.body.Clinic
//     });

//     doctor.save().then(data=>{
//        response.send({status:1});
//    }).catch(err=>{
//        response.send({status:0,msg:err.errmsg});
//    });

//             }
//             if(data){
//                response.send({status:-2})
//             }

//         })

       

        
        


// })
.put((request,response)=>{
   doctorSchema.updateOne({NID:request.body.NID},
       {
        NID:request.body.NID,
        Password:request.body.Password,
        Name:request.body.Name,
        Department:request.body.Department

       }).then((data)=>{
           response.send({status:1});
       }).catch((err)=>{
           response.send({msg:err.errmsg,status:0});
       });

}).delete((request,response)=>{
   let doctor;
   doctorSchema.findOne({NID:request.body.NID}).then((data)=>{
       doctor=data;
    });

    doctorSchema.deleteOne({NID:request.body.NID},(err)=>{
        if(err){
            response.send({status:0,msg:err.errmsg});
        }else{
            response.send({status:1});
        }
    });
});


adminRouter.get("/doctor/details/:NID",(request,response)=>{
   doctorSchema.findOne({NID:request.params.NID}).then(data=>{
       response.send({status:1,data:data});
    }).catch((error)=>{
        response.send({status:0,msg:error.errmsg});
    });
});


   


/****************************************
    # (1) : CRUD Opertation Of SuperVisor
*****************************************/
     adminRouter.route("/supervisor")    // /admin
     .get((request,response)=>{         
         clinicSupervisorSchema.find({}).then((data)=>{
             response.send({data:data,status:1});
         }).catch((error)=>{
             response.send({status:0,msg:error.errmsg});
         });
     })
    //  .post((request,response)=>{    
    //      nid=request.body.NID
    //      clinicSupervisorSchema.findOne({NID:nid}).then((data)=>{
    //          if(!data)
    //          {
    //             let supervisor=new clinicSupervisorSchema({
    //                 NID:request.body.NID,
    //                 Password:request.body.Password,
    //                 Name:request.body.Name,
    //                 Clinic:request.body.Clinic
    //             });
       
    //             supervisor.save().then(data=>{
    //                response.send({status:1,data:data});
    //            }).catch(err=>{
    //                response.send({status:0,msg:err.errmsg});
    //            });        
                 
    //          }
    //          if(data){
    //              response.send({status:-2})
    //          }
    //      })     
         
    //  })
     .put((request,response)=>{        
        clinicSupervisorSchema.updateOne({NID:request.body.NID},
            {NID:request.body.NID,
             Password:request.body.Password,
             Name:request.body.Name
            }).then((data)=>{
                response.send({status:1,data:data});
            }).catch((err)=>{
                response.send({status:0,msg:err.errmsg});
            });/*catch*/
            // response.send(theResult);

     }).delete((request,response)=>{        
        let supervisor;
        clinicSupervisorSchema.findOne({NID:request.body.NID}).then(data=>{
            supervisor=data;
        });

        clinicSupervisorSchema.deleteOne({NID:request.body.NID},(err)=>{          
            if(err){
                response.send({status:0,msg:err.errmsg});
            }else{
                response.send({status:1});
            }
        });/**/        
    });/*delete*/


    adminRouter.get("/supervisor/details/:NID",(request,response)=>{        
        clinicSupervisorSchema.findOne({NID:request.params.NID}).then(data=>{
            response.send({status:1,data:data});
        }).catch(error=>{
            response.send({status:0,msg:error.errmsg});
        });        
    });/*get*/

module.exports=adminRouter;