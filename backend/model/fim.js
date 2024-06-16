const mongoose = require('mongoose')

const filmShema = mongoose.Schema({
    name : {type : String, required: true},
    date : {type : Number, required: true},
    duree : {type : Number, required: true},
    type : {type : String, required: true},
    rate : {type : Number, required: true}
})

const film = mongoose.model("film", filmShema)

module.exports = film 