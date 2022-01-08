const express = require("express");
const router = new express.Router();
const Movie = require("../models/movies")


//Add Movie into Database

router.post("/movies", async(req, res) => {
    try{
        const user = new Movie(req.body);
        const createMovie = await user.save();
        res.status(201).send(createMovie);
    }
    catch(e){
        res.status(400).send(e);
    }
})



//Display All the movies present into database

router.get("/movies", async(req, res) =>{
    try{
        const movieData = await Movie.find();
        res.status(201).send(movieData)
    }catch(e){
        res.status(400).send(e)
    }
})


//Get the indivisual movie data using id

// router.get("/movies/:id", async (req, res) =>{
//     try{
//         const _id = req.params.id;
//         const movieData = await Movie.findById(_id);
//         console.log(movieData);
//         if(!movieData){
//             return res.status(404).send();
//         }
//         else{
//             res.send(movieData);
//         }
//     }catch(e){
//         res.send(e);
//     }
// })



//for delete the movie 
router.delete("/movies/:id", async(req, res) =>{
    try{
         const id = req.params.id;
         const deleteMovie= await Movie.findByIdAndDelete(id);
         if(!req.params.id){
             return res.status(400).send();
         }
         else{
             res.send(deleteMovie);
         }
    }
    catch(e){
        res.send(500).send(e); 
    }
})




module.exports = router;