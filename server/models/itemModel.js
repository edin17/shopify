const mongoose=require("mongoose");

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:4,
        max:24
    },
    photo:{
        type:String,
        required:true,
    },
    sizes:{
        type:Array,
        required:true
    },
    colors:{
        type:Array,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:{
        type:Object
    },
    description:{
        type:String
    }
})

const Item = mongoose.model("Item",itemSchema);
module.exports=Item;