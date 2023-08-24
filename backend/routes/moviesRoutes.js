const express = require('express')
const router = express.Router()
const { getMovies, createMovies, updateLikes, deleteMovies } = require('../controllers/moviesControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getMovies)
                  .post(protect, createMovies)

router.route('/:id').put(protect, updateLikes)
                    .delete(protect, deleteMovies)

module.exports = router