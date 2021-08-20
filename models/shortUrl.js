const mongoose = require('mongoose')
const shortId = require("shortid")
const shortUrlSchema  = new mongoose.Schema({
     full:{
         type: String ,
         required:true
     },
     short:{
         type: string,
         required:true,
         default: shortId.generate
     },
     clicks:{
         type:Number,
         required:true,
         default:0 
     }
})

modules.export = mongoose.model('ShortUrl' , shortUrlSchema);