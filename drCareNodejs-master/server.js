let express=require("express"),
    mongoose=require("mongoose"),
    path=require("path"),
    body_parser=require("body-parser"),
    clinicSupervisorRouter=require("./Routes/clinicSupervisorRouter"),
    authRouter=require("./Routes/authRouter"),
    doctorRouter=require("./Routes/doctorRouter"),
    adminRouter=require("./Routes/adminRouter"),
    patientRouter=require("./Routes/patientRouter")
    createError = require('http-errors'),
    cors=require("cors")





    //open server
    let server=express();


    //connect To Database
    // mongoose.connect("mongodb://localhost:27017/drCare",{useUnifiedTopology:true,useNewUrlParser:true})
    // .then(()=>{
    //     console.log("Connected To DB Successfully")
    // })
    // .catch((error)=>{
    //     console.log(error);
    // });


    mongoose.connect("mongodb+srv://MeroHegazi:ovRVUBAIp1NMXS8h@cluster0-4ys8h.mongodb.net/drCare?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>{
        console.log("Connected To DB Successfully")
    })
    .catch((error)=>{
        console.log(error);
    });



    server.use(body_parser.urlencoded({extended:false}));
    server.use(body_parser.json());


    // server.use(cors({
    //     origin:'http://localhost:4200',
    //     optionsSuccessStatus:200
    // }));

    // server.use(cors({
    //     origin:'https://drcare-319b6.web.app',
    //     optionsSuccessStatus:200
    // }));

    server.use(cors());

    



    server.use(/\//,(request,response)=>{
        response.send("Home Page")
    });



    server.use(authRouter);

    server.use("/admin",adminRouter);

    server.use("/supervisor",clinicSupervisorRouter);

    server.use("/doctor",doctorRouter);

    server.use(patientRouter);

    
    



    
    
// catch 404 and forward to error handler
// server.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // error handler
//   server.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.send(err)
//   });




  


// port 
let port=process.env.port||1996;
server.listen(port,()=>{
    console.log("Listening on port 1996");
});