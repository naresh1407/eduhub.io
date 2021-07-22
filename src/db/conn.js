const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/detailsofeducation",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=> {console.log("Mongo db is connected");})
.catch((err)=>{console.log(err);})
 
