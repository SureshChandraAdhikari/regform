const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const mongoose= require("mongoose")
const dotenv=require("dotenv")
const app = express()
const cloudinary = require('cloudinary').v2;
const multer = require('multer');



app.use(express.json())
//app.use(express.urllencoded({ extended: true }))
app.use(cors())
 
dotenv.config();


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_APIKEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'paymentss/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    // Set the filename to a unique value (you can customize this)
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.get("/",cors(),(req,res)=>{})

app.post("/login",async(req,res)=>{
    const{email1,email2,email3,email4,teamName,fullName1,fullname2,fullname3,fullname4,whatsappNumber1,whatsappNumber2,whatsappNumber3,whatsappNumber4}=req.body

    try{
     const check=await collection.findOne({email1:email1})
     
     if(check){
        res.json("exist")
     }
     else{
        res.json("notexist")
     }
    }
    catch(e){
        res.json("fail")
    }
})


app.post("/",upload.single('Img'),async(req,res)=>{

    cloudinary.uploader.upload(req.file.path, { folder: 'paymentss/' }, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }

    // Return the Cloudinary URL of the uploaded image
    res.json({ imageUrl: result.secure_url });
  
});
    const{email1,email2,email3,email4,teamName,fullname1,fullname2,fullname3,fullname4,whatsappNumber1,whatsappNumber2,whatsappNumber3,whatsappNumber4}=req.body



    const data={
        email1:email1,
        email2:email2,
        email3:email3,
        email4:email4,
        teamName:teamName,
        fullname2:fullname2,
        fullname3:fullname3,
        fullname4:fullname4,
        fullname1:fullname1,
        
        whatsappNumber1:whatsappNumber1,
        whatsappNumber2:whatsappNumber2,
        whatsappNumber3:whatsappNumber3,
        whatsappNumber4:whatsappNumber4

    }

    try{
     const check=await collection.find({email1:email1,email2:email2,email3:email3,email4:email4})
     
     if(check){
        res.json("exist")
     }
     else{
        res.json("notexist")
        await collection.insertMany([data])
     }
    }
    catch(e){
        res.json("fail")
    }
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log('failed');
})

app.listen(8000,()=>{
    console.log("port connected")
})












