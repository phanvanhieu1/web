const mongoose = require('mongoose')
const Schema = mongoose.Schema
const branchs= new Schema({
    namebranch: {type:String}
})
module.exports=mongoose.model('branchs',branchs)
