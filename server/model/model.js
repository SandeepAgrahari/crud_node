const  mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})

const User = mongoose.model('users',schema)


module.exports = User