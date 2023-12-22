const mongoose = require("mongoose")

const newSchema=new mongoose.Schema({

    teamName:{
        type:String,
        require:true
    },
    fullname1:{
        type:String,
        require:true
    },
    fullname2:{
        type:String,
        require:true
    },
    fullname3:{
        type:String,
        require:true
    },
   fullname4:{
        type:String,
        require:true
    },
   
    whatsappNumber1:{
        type:Number,
        require:true
    },
    whatsappNumber2:{
        type:Number,
        require:true
    },
    whatsappNumber3:{
        type:Number,
        require:true
    },
    whatsappNumber4:{
        type:Number,
        require:true
    },
   

     email1:{
        type:String,
        require:true


    },
     email2:{
        type:String,
        require:true


    },
     email3:{
        type:String,
        require:true


    },
     email4:{
        type:String,
        require:true


    },
    
})

const collection = mongoose.model("collecton",newSchema)
module.exports=collection



















