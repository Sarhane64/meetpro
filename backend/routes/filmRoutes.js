const express = require("express");
const router = express.Router();

const filmCtrl = require("../controllers/FilmControllers")

router.post("/film", filmCtrl.postFilms)
router.get("/film",filmCtrl.getFilms)
router.get("/filmpipe", filmCtrl.getFilmsPipe)

module.exports = router