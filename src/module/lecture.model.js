const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    title:{type:String,required:true},
    batch:{type:String,required:true}
})

const Lecture = mongoose.model("lecture",lectureSchema);

module.exports=Lecture;