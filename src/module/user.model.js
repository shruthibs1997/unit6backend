const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    profile_photo_url:{type:String,default:""},
    roles:{type:String,default:""}
})

userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
    return next();
})

userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user",userSchema);

module.exports=User;