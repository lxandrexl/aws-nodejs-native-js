const starWarsAPI = require('../models/api.starwars');
const starWarsModel = require('../models/starwars.model');

module.exports = {
    async getPeliculasController(req, res) {
        const peliculaID = req.params.id ? req.params.id : 1;
        let   resultado  = null;

        if (req.params.id)
            resultado = await starWarsAPI.PeliculaPorId(peliculaID);
        else
            resultado = await starWarsAPI.PeliculasListado();

        res.status(HTTP.StatusCodes.OK).json({ resultado });
    },

    async getPlanetasController(req, res) {
        const indicePag = req.params.index ? req.params.index : 1;
        const resultado = await starWarsAPI.ListadoPlanetas(indicePag);

        res.status(HTTP.StatusCodes.OK).json({ resultado });
    },

    async getVehiculosController(req, res) {
        const indicePag = req.params.index ? req.params.index : 1;
        const resultado = await starWarsAPI.ListadoVehiculos(indicePag);

        res.status(HTTP.StatusCodes.OK).json({ resultado });
    },

    async createVehiculo(req, res) {
        const data = req.body;
        const resultado = await starWarsModel.crearVehiculo(data);
        
        res.status(HTTP.StatusCodes.OK).json({ resultado });
    }
}