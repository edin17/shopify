const express=require("express");
const Item=require("../models/itemModel");

const item=express.Router();

item.post("/upload",(req,res)=>{
    const shopItem=req.body;

    const newItem=new Item(shopItem);

    if(newItem){
        newItem.save();
        res.status(200).send("Uploaded");
    }else{
        res.status(500).send("Server error, file rejected!");
    }
})

module.exports=item;