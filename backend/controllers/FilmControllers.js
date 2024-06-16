const film = require("../model/fim.js")

exports.postFilms = async (req,res,next) => {
    try {
        const films = await film.create(req.body)
        res.status(201).json(films)
    } catch (error) {
        next({message : error.message})
    }
}

exports.getFilms = async (req,res,next) => {
    try {
        const films = await film.find({})
        res.status(201).json(films)
    } catch (error) {
        next({message : error.message})
    }
}

exports.getFilmsPipe = async (req, res, next) => {
  try {
      const query = {};
      if (req.query.name) {
        query.name = { $regex: req.query.name, $options: 'i' }; // Recherche insensible à la casse
      }
      if (req.query.date) {
        query.date = req.query.date; // Filtre exact pour la date
      }
      if (req.query.duree) {
        query.duree = Number(req.query.duree); // Conversion en nombre pour la durée
      }
      if (req.query.type) {
        query.type = { $regex: req.query.type, $options: 'i' }; // Recherche insensible à la casse pour le type
      }
      if (req.query.rate) {
        query.rate = Number(req.query.rate); // Conversion en nombre pour le taux
      }
  
      const films = await film.find(query);
      res.json(films);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


