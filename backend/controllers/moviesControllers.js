const asyncHandler = require('express-async-handler')
const Movie = require('../models/moviesModel')


const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
})

const createMovies = asyncHandler(async (req, res) => {
    const {title, overview, backdrop_url, poster_url, release_date, likes} = req.body
    if(!title || !overview || !backdrop_url || !poster_url || !release_date) {
        res.status(400)
        throw new Error('Por favor completa la información de la película')
    }

    const newMovie = await Movie.create({
        title,
        overview,
        backdrop_url,
        poster_url,
        release_date,
        likes
    })
    res.status(201).json(newMovie)   
})

const updateLikes = asyncHandler(async (req, res) => {
    const movieToUpdate = await Movie.findById(req.params.id)
    if(!movieToUpdate){
        res.status(400)
        throw new Error('La película no existe')
    }
    else {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedMovie)
    }
})

const deleteMovies = asyncHandler(async (req, res) => {
    const movieToDelete = await Movie.findById(req.params.id)
    if(!movieToDelete){
        res.status(400)
        throw new Error('La película no existe')
    }
    else {
        movieToDelete.deleteOne()
        res.status(200).json({ id: req.params.id })
    }
})

const getOneMovie = asyncHandler(async (req, res) => {
    const movieToGet = await Movie.findById(req.params.id)
    if(!movieToGet){
        res.status(400)
        throw new Error('La película no existe')
    }
    else {
        res.status(200).json(movieToGet)
    }
})

module.exports = {
    getMovies,
    createMovies,
    updateLikes,
    deleteMovies,
    getOneMovie
}