const starWars = require('../controllers/starwars.controller');
const express  = require('express');
const router   = express.Router();


router.get('/peliculas/:id?'    , starWars.getPeliculasController);
router.get('/planetas/:index?'  , starWars.getPlanetasController);
router.get('/vehiculos/:index?' , starWars.getVehiculosController);

router.post('/vehiculos'        , starWars.createVehiculo);

module.exports = router;