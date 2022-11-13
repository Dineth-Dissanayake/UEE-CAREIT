import express from "express";

const Job = require("../models/jobPoster.m");
const router = express.Router();

//ADD NEW
router.post('/jobPoster/add', (req,res)=>{
    let newJob = new Job(req.body);

    newJob.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Job added successfully🆗"
        });
    });
});


//GET
router.get('/jobs', (req,res) => {
    Job.find().exec((err,Job) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingJob:Job
        });
    });
});


//GET SPECIFIC
router.get("/job/:id", (req,res) => {
    let jobID = req.params.id;

    Job.findById(jobID,(err,job) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            job
        });
    });
});


//UPDATE
router.put('/job/update/:id',(req,res) => {
    Job.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Job) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Job Updated Successfully!🆗"
            });
        }
    );
});


//DELETE
router.delete('/job/:id', (req,res) => {
    Job.findByIdAndRemove(req.params.id).exec((err,deletedJob) => {
        if(err) return res.status(400).json({
            message:"Job Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Job Delete Successful!🆗",deletedJob
        });
    });
});


module.exports = router;