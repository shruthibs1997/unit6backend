const express = require('express');
const router = express.Router();

// const auth = require("../middleware/authenticate");
const Lecture = require('../module/lecture.model');

// router.post("/",auth,async(req,res)=>{
//     try{
//         const lecture = await Lecture.create(req.body);
//         return res.status(202).json({lecture:lecture})
//     }catch(err){
//         return res.status(401).json({status:"error"})
//     }
// })

router.get("/",async(req,res)=>{
    try{
        const lecture = await Lecture.find().lean().exec();
        return res.status(202).json({lecture:lecture})
    }catch(err){
        return res.status(400).json({status:"error"})
    }
})

router.post("/",async(req,res)=>{
    try{
        const lecture = await Lecture.create(req.body);
        return res.status(202).json({lecture:lecture})
    }catch(err){
        return res.status(400).json({status:"error"})
    }
})
module.exports=router;

