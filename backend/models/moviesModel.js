const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor, escriba el título de la película']
    },
    overview: {
        type: String,
        required: [true, 'Por favor agrega una sinópsis a la película']
    },
    backdrop_url: {
        type: String,
        required: [true, 'Por favor agrega una url de la imágen de vista previa']
    },
    poster_url: {
        type: String,
        required: [true, 'Por favor agrega una url de la imágen del poster']
    },
    release_date: {
        type: Date,
        required: [true, 'Por favor agrega la fecha de estreno']
    },
    likes: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)