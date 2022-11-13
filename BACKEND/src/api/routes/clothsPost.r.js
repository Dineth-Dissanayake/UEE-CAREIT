import express from "express";

const ClothsPost = require("../models/clothsPost.m");
const router = express.Router();

//ADD NEW POST
router.post('/clothsPost/add', (req,res)=>{
    let newClothPost = new ClothsPost(req.body);

    newClothPost.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post added successfully🆗"
        });
    });
});

//GET ALL CLOTH POSTS
router.get('/clothsPosts', (req,res) => {
    ClothsPost.find().exec((err,ClothsPost) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingClothsPost:ClothsPost
        });
    });
});

module.exports = router;