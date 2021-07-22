const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT || 4000;
const static_path=path.join(__dirname,"../public");

const cookieParser = require("cookie-parser")

app.use(express.static(static_path));
app.set('view engine','ejs');
require("./db/conn");
const Register =require("./module/userRegister");
const { Console } = require('console');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get("/",(req,res)=>{
  res.render('index');
});
app.get("/login",(req,res)=>{
  res.render('login');
});
app.get("/teacherlogin",(req,res)=>{
  res.render('teacherlogin');
});
app.get("/studentportal",(req,res)=>{
  res.render('studentportal');
});
app.get("/teacherportal",(req,res)=>{
  res.render('teacherportal');
});
app.get("/signup",(req,res)=>{
  res.render('signup');
});

app.post("/signup",async(req,res)=>{
  try{
   const password= req.body.password;
   const cpassword= req.body.confirmpassword;
   if(password==cpassword)
   {
      const registerEmployee = new Register({
       email:req.body.email,
       name: req.body.name,
       password:req.body.password,
       confirmpassword:req.body.confirmpassword
      })
      
    
     
      const registered=await registerEmployee.save();
      
      res.status(201).render('studentportal');
   }else{
       res.send("password not matching");
   }
  }
  catch(error){
   res.status(400).send(error);
  } 
});

app.post("/login",async(req,res)=>{
  try{
   const email =req.body.email;
   const password=req.body.password;
   const useremail=await Register.findOne({email:email});
   
  if(useremail.password=== password){
            res.status(201).render("studentportal");
        }else{
            res.send("invalid datas");
        }
       }

  catch(error){
   res.status(400).send(error); 
  }
});

app.post("/teacherlogin",async(req,res)=>{
  try{
   const email =req.body.email;
   const password=req.body.password;
   const useremail=await Register.findOne({email:email});
   
  if(useremail.password=== password){
            res.status(201).render("teacherportal");
        }else{
            res.send("invalid datas");
        }
       }

  catch(error){
   res.status(400).send(error); 
  }
});

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})