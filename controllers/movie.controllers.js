const express = require('express');
const movies = require("../models/movie.model")

const router = express.Router();

router.get("/", async (req, res) => {
    let {page=1,pageSize=5,sortBy="title",sortOrder="asc",filterBy="title",filter=""}=req.query;
    let limit = Number(pageSize);
    let skip = Number(pageSize) * (Number(page) - 1);
    let Movies;
    try {
        if(filter){
      Movies = await movies.find({[filterBy]:filter}).limit(limit).skip(skip).sort({[sortBy]:sortOrder=='asc'?1:-1});
        }else{
             Movies = await movies.find().limit(limit).skip(skip).sort({[sortBy]:sortOrder=='asc'?1:-1});
        }
        return res.status(200).send(Movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})



router.post("/", async (req, res) => {
    try {
        const Movies = await movies.create(req.body);
        return res.status(200).send(Movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const Movies = await movies.findById(req.params.id);
        return res.status(200).send(Movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


router.patch("/:id", async (req, res) => {
    try {
        const Movies = await movies.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.status(200).send(Movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const Movies = await movies.findByIdAndDelete(req.params.id)
        return res.status(200).send(Movies);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;




// http://localhost:5000/movies?page=2&pageSize=2 (pagination...)

// http://localhost:5000/movies?page=1&pageSize=5&sortBy=title&sortOrder=desc(sorting...)
// http://localhost:5000/movies?page=1&pageSize=5&fiterBy=title&filter=cricket



// 63a826b7969811f8cd969965