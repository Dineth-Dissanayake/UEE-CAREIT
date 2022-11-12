import express from "express";

const Food = require("../models/food.m");
const router = express.Router();

//ADD NEW FOOD
router.post('/food/add', (req,res)=>{
    let newFood = new Food(req.body);

    newFood.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Food added successfully🆗"
        });
    });
});


//GET FOODS
router.get('/foods', (req,res) => {
    Food.find().exec((err,Food) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFood:Food
        });
    });
});


//GET SPECIFIC FOOD
router.get("/food/:id", (req,res) => {
    let foodID = req.params.id;

    Food.findById(foodID,(err,food) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            food
        });
    });
});


//UPDATE FOOD
router.put('/food/update/:id',(req,res) => {
    Food.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Food) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Food Updated Successfully!🆗"
            });
        }
    );
});


//DELETE FOOD
router.delete('/food/:id', (req,res) => {
    Food.findByIdAndRemove(req.params.id).exec((err,deletedFood) => {
        if(err) return res.status(400).json({
            message:"Food Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Food Delete Successful!🆗",deletedFood
        });
    });
});


module.exports = router;